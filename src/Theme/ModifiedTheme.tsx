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

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    modified: true;
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
  // Not all components can receive a variant or style override something to consier (known issue)
  // Github has a reference with what can and can't be overridden and that can also use a variant
  // https://mui.com/material-ui/api/button/
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          border: '1px solid black',
        },
      },
      variants: [
        {
          props: { variant: 'modified' },
          style: {
            fontStyle: 'italic',
            border: '4px solid lightblue',
            color: 'darkblue',
          },
        },
      ],
    },
  },
});

export { ModifiedTheme };
