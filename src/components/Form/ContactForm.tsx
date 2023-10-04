import React, { useState } from 'react';
import {
  Autocomplete,
  AutocompleteChangeReason,
  AutocompleteInputChangeReason,
  Button,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  ListItemText,
  MenuItem,
  Paper,
  Radio,
  RadioGroup,
  Select,
  SelectChangeEvent,
  Stack,
  TextField,
} from '@mui/material';

// Datepicker stuff
import { DesktopDatePicker } from '@mui/x-date-pickers';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { contactData, FormValues } from '../../Data/ContactData';

const roles = [
  'CTO',
  'CEO',
  'React',
  'Angular',
  'Python',
  'NodeJS',
  'Machine Learning',
];
// This allows for a change to be made in one location versus needing to make multiple changes
const defaultPreference = 'Work From Home';
const skills = [
  'Software Dev',
  'Architect',
  'Designer',
  'Business Analyst',
  'React',
];
const minWidth = 300;
const today = new Date();

type Props = {};

const ContactForm = (props: Props) => {
  const getDefaultFormValues = () => {
    return {
      id: contactData.length + 1,
      name: '',
      skills: ['React'],
      startDate: `${
        today.getMonth() + 1
      }/${today.getDate()}/${today.getFullYear()}`,
      preference: defaultPreference,
    };
  };

  const [formValues, setFormValues] = useState<FormValues>(
    getDefaultFormValues(),
  );

  const handleTextFieldChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  // We only want the value and address if it is also undefined
  const handleAutoCompleteChange = (
    event: React.SyntheticEvent<Element, Event>,
    value: string,
  ) => {
    setFormValues({
      ...formValues,
      role: value || '',
    });
  };

  const handleSelectChange = (
    event: SelectChangeEvent<string[]>,
    child: React.ReactNode,
  ) => {
    const {
      target: { value },
    } = event;
    setFormValues({
      ...formValues,
      skills: typeof value === 'string' ? value.split(', ') : value,
    });
  };

  const handleDatepickerChange = (value: string | null | undefined) => {
    // We are going to use some type shifting to handle this appropriately
    // This is a workaround as MUI hasn't addressed this yet
    // Placing a console.log here to confirm what the current state of the DatePicker is for now
    // TODO: Remove once MUI has addressed this workaround
    console.log(value);
    const startDate = value as unknown as {
      month: () => string;
      date: () => string;
      year: () => string;
    };
    setFormValues({
      ...formValues,
      startDate: `${
        startDate.month() + 1
      }/${startDate.date()}/${startDate.year()}`,
    });
  };

  const handleRadioChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    value: string,
  ) => {
    const { name } = event.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  return (
    <Paper>
      <form>
        <FormControl>
          <FormGroup
            row
            sx={{
              padding: 2,
              justifyContent: 'space-between',
            }}
          >
            <TextField
              label='Name'
              id='name'
              name='name'
              variant='outlined'
              sx={{
                minWidth: minWidth,
                marginRight: 2, // This reaches into the default theme and is about 16 pixels
              }}
              value={formValues.name}
              // In case you want to know the type that is expected remove the "handleTextFieldChange" handler in the onChange prop
              // Go up to the handleTextFieldChange handler and the event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
              // Hover over the onChange and intillisense will tell you it expects what is on the handler event pretty cool right
              onChange={handleTextFieldChange}
            />
            <Autocomplete
              options={roles}
              sx={{ minWidth: minWidth }}
              renderInput={(params) => {
                // This controls the typeable area which is controlled by this and allows customization
                return (
                  <TextField
                    name='role'
                    {...params}
                  />
                );
              }}
              // This controls the filter that is taking place behind the scenes and look for an option that is available
              getOptionLabel={(roleOption) => `${roleOption}`}
              renderOption={(props, option) => {
                return <li {...props}>{`${option}`}</li>;
              }}
              value={formValues.role || ''}
              isOptionEqualToValue={(option, value) =>
                option === value || value === ''
              }
              onInputChange={handleAutoCompleteChange}
            />
          </FormGroup>
          <FormGroup
            row
            sx={{
              padding: 2,
              justifyContent: 'space-between',
            }}
          >
            {/* The value is retrieved from children */}
            <Select
              id='skill-select'
              // This join is meant to separate mulitple skills on a profile if that is the case
              renderValue={(select: string[]) => select.join(', ')}
              sx={{
                minWidth: minWidth,
                marginRight: 2, // This reaches into the default theme and is about 16 pixels
              }}
              value={formValues.skills || ''}
              onChange={handleSelectChange}
            >
              {skills.map((skillName) => {
                return (
                  <MenuItem
                    value={skillName}
                    key={skillName}
                  >
                    <ListItemText primary={skillName} />
                  </MenuItem>
                );
              })}
            </Select>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DesktopDatePicker
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
                value={formValues.startDate}
                onChange={handleDatepickerChange}
              />
            </LocalizationProvider>
          </FormGroup>
          <FormGroup
            row
            sx={{
              padding: 2,
              justifyContent: 'space-between',
            }}
          >
            <FormGroup
              sx={{
                minWidth: minWidth,
                marginRight: 2, // This reaches into the default theme and is about 16 pixels
              }}
            >
              <FormLabel component='legend'>Work Preference</FormLabel>
              {/* This is kind of the control for the radio buttons */}
              <RadioGroup
                id='preference-type-radio'
                name='preference'
                value={formValues.preference}
                onChange={handleRadioChange}
              >
                <FormControlLabel
                  label={defaultPreference}
                  value={defaultPreference}
                  control={<Radio />}
                />
                <FormControlLabel
                  label='Hybrid'
                  value='Hybrid'
                  control={<Radio />}
                />
                <FormControlLabel
                  label='In Office'
                  value='In Office'
                  control={<Radio />}
                />
              </RadioGroup>
            </FormGroup>
            <Stack>
              <Button>Submit</Button>
              <Button>Clear</Button>
            </Stack>
          </FormGroup>
        </FormControl>
      </form>
    </Paper>
  );
};

export default ContactForm;
