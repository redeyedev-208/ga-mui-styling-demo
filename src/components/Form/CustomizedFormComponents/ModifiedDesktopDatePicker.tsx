import { TextField } from '@mui/material';
// In 2022 the import was a bit different coming from MUI labs or something like that these are often updated on experimental release
import { DesktopDatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import React from 'react';
import { minWidth } from '../ContactForm';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

// This is how we can drill down for more specificity when working with compositional components
const popperSX = {
  '& .MuiPaper-root': {
    color: 'blue',
  },
  '& [role=grid]': {
    backgroundColor: 'lightgray',
    '& button': {
      backgroundColor: 'blue',
      color: 'white',
    },
  },
};

const ModifiedDesktopDatePicker = (props: {
  value: string | undefined;
  onChange: (value: string | null | undefined) => void;
}) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DesktopDatePicker
        {...props}
        label='Date'
        inputFormat='MM/DD/YYYY'
        // This limits what is available on the dropdown (Note: So for example limiting the day for a specific day can be truly useful and limiting)
        views={['day']}
        renderInput={(params) => {
          return (
            <TextField
              sx={{ minWidth: minWidth }}
              {...params}
            />
          );
        }}
        // This is how we are able to use a few components that can be customized "components are deprecated" use slots instead to meet your use case
        // https://mui.com/x/api/date-pickers/desktop-date-time-picker/#DesktopDateTimePicker-prop-components
        components={{
          OpenPickerIcon: CalendarTodayIcon,
        }}
        InputProps={{
          sx: { '& .MuiSvgIcon-root': { color: 'primary.main' } },
        }}
        PopperProps={{
          sx: popperSX,
        }}
      />
    </LocalizationProvider>
  );
};

export default ModifiedDesktopDatePicker;
