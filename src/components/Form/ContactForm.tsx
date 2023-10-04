import React from 'react';
import {
  Autocomplete,
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
  Stack,
  TextField,
} from '@mui/material';

// Datepicker stuff
import { DesktopDatePicker } from '@mui/x-date-pickers';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

const roles = [
  'CTO',
  'CEO',
  'React',
  'Angular',
  'Python',
  'NodeJS',
  'Machine Learning',
];
const skills = ['Software Dev', 'Architect', 'Designer', 'Business Analyst'];
const minWidth = 300;

type Props = {};

const ContactForm = (props: Props) => {
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
              renderValue={(select: string[]) => select.join(', ')}
              sx={{
                minWidth: minWidth,
                marginRight: 2, // This reaches into the default theme and is about 16 pixels
              }}
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
                value='xyz'
                onChange={() => {}}
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
              <RadioGroup
                id='preference-type-radio'
                name='preference'
                value='Work From Home'
              >
                <FormControlLabel
                  label='Work From Home'
                  value='Work From Home'
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
