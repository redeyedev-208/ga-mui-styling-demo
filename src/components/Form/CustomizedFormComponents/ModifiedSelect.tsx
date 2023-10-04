import {
  ListItemText,
  MenuItem,
  Select,
  SelectChangeEvent,
  SelectProps,
} from '@mui/material';
import { minWidth } from '../ContactForm';

const skills = [
  'Software Dev',
  'Architect',
  'Designer',
  'Business Analyst',
  'React',
];
type Props = {};
// Only used in one location in multiple locations we would modify the types to handle this
// On change is not happy and tells us hey dude this is wack, so we can address this below to fix that
const ModifiedSelect = (props: {
  value: '' | string[] | undefined;
  onChange: (
    event: SelectChangeEvent<string[]>,
    child: React.ReactNode,
  ) => void;
}) => {
  return (
    <Select
      {...props}
      id='skill-select'
      // This join is meant to separate mulitple skills on a profile if that is the case
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
  );
};

export default ModifiedSelect;
