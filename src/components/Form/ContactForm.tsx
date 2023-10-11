import React, { useState } from 'react';
import {
  Alert,
  AlertTitle,
  Autocomplete,
  AutocompleteChangeReason,
  AutocompleteInputChangeReason,
  Button,
  Checkbox,
  Dialog,
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

import ModifiedTextField from './CustomizedFormComponents/ModifiedTextField';

// Datepicker stuff
import { DesktopDatePicker } from '@mui/x-date-pickers';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { contactData, FormValues } from '../../Data/ContactData';
import ModifiedAutoComplete from './CustomizedFormComponents/ModifiedAutoComplete';
import ModifiedSelect from './CustomizedFormComponents/ModifiedSelect';
import ModifiedDesktopDatePicker from './CustomizedFormComponents/ModifiedDesktopDatePicker';
import ModifiedRadios from './CustomizedFormComponents/ModifiedRadios';

// This allows for a change to be made in one location versus needing to make multiple changes
export const defaultPreference = 'Work From Home';
// const skills = [
//   'Software Dev',
//   'Architect',
//   'Designer',
//   'Business Analyst',
//   'React',
// ];
export const minWidth = 300;
const today = new Date();
const skills = [
  'Software Dev',
  'Architect',
  'Designer',
  'Business Analyst',
  'React',
];

// This is how we target all of the inputs for the Paper component all in one location
// The syntax we use to accomplish this is called JSS "following eMotion standards"
const paperInputsStyle = {
  '& .MuiOutlinedInput-root': {
    '& > fieldset': { border: '1px solid', borderColor: 'primary.main' },
    '&:hover': {
      '& > fieldset': { borderColor: 'primary.light' },
    },
  },
  '& .MuiFormLabel-root': {
    color: 'primary.dark',
  },
};

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

  // Used for the Alert in the  Modal
  const [alertOpen, setAlertOpen] = useState(false);

  // Note: These handlers can be moved to there own file and imported to clean up the code
  // This is a common approach for readability and also leaves the Contact form as lean as possible
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

  const handleButtonSubmit = () => {
    // With this we are pushing the values from the form
    // Ideally this  would be saved to a DB but to make the focus on MUI we are handling it like this for now
    // We want to clear out the form values and then reset it to the default values
    contactData.push(formValues);
    setAlertOpen(true);
    clearValues();
  };

  const handleClearBtnClick = () => {
    clearValues();
  };

  const clearValues = () => {
    setFormValues({ ...getDefaultFormValues() });
  };

  const handleAlertClick = () => {
    setAlertOpen(false);
  };

  return (
    <>
      <Paper sx={paperInputsStyle}>
        <form>
          <FormControl>
            <FormGroup
              row
              sx={{
                padding: 2,
                justifyContent: 'space-between',
              }}
            >
              <ModifiedTextField
                value={formValues.name}
                // The values being used in here weren't abstracted because they play an essential part of this contact form
                // In case you want to know the type that is expected remove the "handleTextFieldChange" handler in the onChange prop
                // Go up to the handleTextFieldChange handler and the event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
                // Hover over the onChange and intillisense will tell you it expects what is on the handler event pretty cool right
                onChange={handleTextFieldChange}
              />
              <ModifiedAutoComplete
                value={formValues.role || ''}
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
              <ModifiedSelect
                value={formValues.skills || ''}
                onChange={handleSelectChange}
              >
                {skills.map((skillName) => {
                  return (
                    <MenuItem
                      value={skillName}
                      key={skillName}
                    >
                      <Checkbox
                        checked={formValues.skills?.includes(skillName)}
                      />
                      <ListItemText primary={skillName} />
                    </MenuItem>
                  );
                })}
              </ModifiedSelect>
              <ModifiedDesktopDatePicker
                value={formValues.startDate}
                onChange={handleDatepickerChange}
              />
            </FormGroup>
            <FormGroup
              row
              sx={{
                padding: 2,
                justifyContent: 'space-between',
              }}
            >
              <ModifiedRadios
                preference={formValues.preference}
                handleRadioChange={handleRadioChange}
              />
              <Stack>
                <Button onClick={handleButtonSubmit}>Submit</Button>
                <Button onClick={handleClearBtnClick}>Clear</Button>
              </Stack>
            </FormGroup>
          </FormControl>
        </form>
      </Paper>
      <Dialog
        open={alertOpen}
        onClose={handleAlertClick}
      >
        <Alert onClose={handleAlertClick}>
          <AlertTitle>Success!</AlertTitle>
          Form has been submitted
        </Alert>
      </Dialog>
    </>
  );
};

export default ContactForm;
