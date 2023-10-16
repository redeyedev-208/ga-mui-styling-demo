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
        marginRight: 2,
        marginBottom: {
          xs: 2,
          md: 0,
        },
        // zIndex: 'drawer', // Note: this looks at the default themes and will look at the drawer next
        // '& .MuiInputBase-root': { height: 80 }, Note: Just an example of how to adjust the height
        '& .MuiOutlinedInput-root.Mui-focused': {
          '& > fieldset': {
            borderColor: 'primary.dark',
          },
        },
        '& .MuiOutlinedInput-root:hover': {
          '& > fieldset.MuiOutlinedInput-notchedOutline': {
            borderColor: 'orange',
          },
        },
      }}
    />
  );
};

export default ModifiedTextField;
