import { Autocomplete, TextField, AutocompleteProps } from '@mui/material';
import { minWidth } from '../ContactForm';

type Props = {};

const roles = [
  'CTO',
  'CEO',
  'React',
  'Angular',
  'Python',
  'NodeJS',
  'Machine Learning',
];

const ModifiedAutoComplete = (props: {
  value: string;
  onInputChange: (
    event: React.SyntheticEvent<Element, Event>,
    value: string,
  ) => void;
}) => {
  return (
    <Autocomplete
      {...props}
      options={roles}
      sx={{ minWidth: minWidth }}
      // We should not throw any errors if the value is an empty string
      isOptionEqualToValue={(option, value) => option === value || value === ''}
      renderInput={(params) => {
        // This controls the typeable area which is controlled by this and allows customization
        return (
          <TextField
            {...params}
            name='role'
            sx={{
              '& .MuiOutlinedInput-root.Mui-focused': {
                color: 'primary.dark',
              },
            }}
          />
        );
      }}
      // This controls the filter that is taking place behind the scenes and look for an option that is available
      // It is applied to the different options and filter them based on the input that is entered
      // Following best practices don't add inline styling unless you must but ensure that what is implemented is fully accessible
      getOptionLabel={(roleOption) => `${roleOption}`}
      renderOption={(props, option) => {
        return <li {...props}>{`${option}`}</li>;
      }}
      ListboxProps={{
        // Internal components with lots going on will follow a similar pattern based on the props that are coming in
        // Pro: we can now use the sx value and access a theme as opposed to styling the li
        // Aslo a work around in case you are getting errors on legit code using TypeScript
        // Only add "@ts-ignore" if the code is too legit to quit
        //@ts-ignore
        sx: {
          height: 100,
          color: 'primary.dark',
          // Only by placing the debugger on the onChange below that is commented out you'll be able to target the correct element
          '& li.MuiAutocomplete-option:hover': { backgroundColor: 'lightgray' },
          '& li.MuiAutocomplete-option[aria-selected="true"].Mui-focused': {
            backgroundColor: 'lightgray',
          },
        },
      }}
      // If customization for a ListBox is needed then adding the onChange will allow for targetting the appropriate element
      // Reason being that trying to inspect in the dev console as soon as you click on the element the ListBox will go away
      // onChange={() => {
      //   {
      //     debugger;
      //   }
      // }}
    />
  );
};

export default ModifiedAutoComplete;
