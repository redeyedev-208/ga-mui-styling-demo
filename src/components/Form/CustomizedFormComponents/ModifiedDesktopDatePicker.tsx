import { TextField } from '@mui/material';
import { DesktopDatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import React from 'react';
import { minWidth } from '../ContactForm';

type Props = {};

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
        renderInput={(params) => {
          return (
            <TextField
              sx={{ minWidth: minWidth }}
              {...params}
            />
          );
        }}
      />
    </LocalizationProvider>
  );
};

export default ModifiedDesktopDatePicker;
