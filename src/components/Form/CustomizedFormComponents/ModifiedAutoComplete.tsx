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
      isOptionEqualToValue={(option, value) => option === value || value === ''}
    />
  );
};

export default ModifiedAutoComplete;
