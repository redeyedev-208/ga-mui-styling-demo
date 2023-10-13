import { createTheme } from '@mui/material';

// Color theme taken from this resource: https://0to255.com/1d0dbc
// This is a great resources as it gives you an option to select a color and have the values for a new color scheme

declare module '@mui/material/styles/createPalette' {
  interface Palette {
    grid: { main: string; dark: string };
  }
  // A second interface is needed to make this actualy work
  interface PaletteOptions {
    grid?: { main: string; dark: string };
  }
}
const ModifiedTheme = createTheme({
  palette: {
    primary: {
      main: '#4e3df2',
      light: '#4e3df2',
      dark: 'darkblue',
    },
    // When using TypeScript we have to let the compiler know that grid is a valid value
    grid: {
      main: 'rgba(0,0,0, 0.1)',
      dark: 'rgba(0,0,0, 0.2)',
    },
  },
});

export { ModifiedTheme };
