import {
  FormGroup,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
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
        value={props.preference}
        onChange={props.handleRadioChange}
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
  );
};

export default ModifiedRadios;
