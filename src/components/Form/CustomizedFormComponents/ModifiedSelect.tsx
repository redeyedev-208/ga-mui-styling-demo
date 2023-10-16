import { useRef, useEffect, useState } from 'react';
import { Select, SelectChangeEvent } from '@mui/material';
import { minWidth } from '../ContactForm';
import { ReactNode } from 'react';

// Only used in one location in multiple locations we would modify the types to handle this
// On change is not happy and tells us hey dude this is wack, so we can address this below to fix that
export default function ModifiedSelect(props: {
  value: '' | string[] | undefined;
  onChange: (
    event: SelectChangeEvent<string[]>,
    child: React.ReactNode,
  ) => void;
  children: ReactNode[];
}) {
  const selectInputRef = useRef<HTMLInputElement>(null);

  // Default value is zero so there aren't any adjustments being applied
  const [position, setPosition] = useState(0);

  // We will change the position to handle the shifting of our position select input component
  useEffect(() => {
    setPosition(
      selectInputRef.current
        ? selectInputRef.current.getBoundingClientRect().left + 20
        : 0,
    );
  }, [selectInputRef]);
  return (
    <Select
      ref={selectInputRef}
      {...props}
      id='skill-select'
      // This join is meant to separate mulitple skills on a profile if that is the case
      renderValue={(select: string[]) => select.join(', ')}
      sx={{
        minWidth: minWidth,
        marginRight: 2, // This reaches into the default theme and is about 16 pixels
        marginBottom: { xs: 2, md: 0 },
      }}
      multiple
      // MUI is actually adding inline styling to handle the menu prop so we are working around that (overriden because it is a class)
      MenuProps={{
        PaperProps: {
          sx: {
            left: `${position}px !important`,
            // Just an example on how to add the maxHeight if the checkbox items are a bit much we would set this to be inbetween the next option
            maxHeight: 280,
          },
        },
      }}
    >
      {props.children}
    </Select>
  );
}
