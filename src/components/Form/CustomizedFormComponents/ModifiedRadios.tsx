import {
  FormGroup,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormHelperText,
  FormControl,
} from '@mui/material';
import React from 'react';
import { minWidth, defaultPreference } from '../ContactForm';

type Props = {};

const ModifiedRadios = (props: {
  preference: string | undefined;
  handleRadioChange: (
    event: React.ChangeEvent<HTMLInputElement>,
    value: string,
  ) => void;
}) => {
  return (
    // We can use form control and add the disable prop and this will disable everything that is wrapped
    // Comment out the wrapping form control component to see that the rabio buttons and text for Work Preference are now disabled
    // <FormControl disabled>
    <FormGroup
      sx={{
        minWidth: minWidth,
        marginRight: 2, // This reaches into the default theme and is about 16 pixels
        marginBottom: { xs: 2, md: 0 },
      }}
    >
      <FormLabel component='legend'>Work Preference</FormLabel>
      {/* This is kind of the control for the radio buttons */}
      {/* This also has a row prop and has more than just a row prop */}
      <RadioGroup
        id='preference-type-radio'
        name='preference'
        value={props.preference}
        onChange={props.handleRadioChange}
      >
        {/* This is wrapping only one particular control like a checkbox, radio or switch for example */}
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
      <FormHelperText>WFH (Remote)</FormHelperText>
    </FormGroup>
    // </FormControl>
  );
};

export default ModifiedRadios;
