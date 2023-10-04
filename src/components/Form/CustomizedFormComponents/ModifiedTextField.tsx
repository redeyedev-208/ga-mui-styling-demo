import { TextField, TextFieldProps } from '@mui/material';
import { minWidth } from '../ContactForm';
import React from 'react';

type Props = {};

// Important to call out since we are only using this in one spot we are ok to add the props as such
// However if we are using this component in multiple locations of a code base we would use a different approach
const ModifiedTextField = (props: TextFieldProps) => {
  return (
    <TextField
      {...props}
      label='Name'
      id='name'
      name='name'
      variant='outlined'
      sx={{
        minWidth: minWidth,
        marginRight: 2, // This reaches into the default theme and is about 16 pixels
      }}
    />
  );
};

export default ModifiedTextField;
