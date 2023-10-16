import {
  Drawer,
  AppBar,
  Toolbar,
  Typography,
  List,
  ListItem,
  useMediaQuery,
  IconButton,
} from '@mui/material';
import ContactForm from '../Form/ContactForm';

import MenuIcon from '@mui/icons-material/Menu';

import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import ContactCardGrid from '../Grid/ContactCardGrid';
import ContactTable from '../Table/ContactTable';
import ContactDataGrid from '../DataGrid/ContactDataGrid';
import { useTheme, Theme, ThemeProvider } from '@mui/material/styles';
import { ModifiedTheme } from '../../Theme/ModifiedTheme';
import { useEffect, useState } from 'react';

// These are for the styling and just commenting them for readability
const drawerWidth = 240;
// Using this in two locations so it makes more sense to just create a const
const transitionDuration = 1000;

let theme = {};
// The purpose of this is to dynamically create the zIndex on the AppBar
const themedStyles = (theme: Theme, responsiveDrawer: number | string) => {
  return {
    menuButton: {
      marginRight: 2,
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
    },
    drawer: {
      width: responsiveDrawer,
      '& .MuiBackdrop-root': {
        display: 'none',
      },
    },
    drawerPaper: {
      width: responsiveDrawer,
      backgroundColor: 'rgba(120,120, 120, 0.2)',
    },
    content: {
      marginLeft: 0,
      padding: 3,
      maxWidth: 720,
      minWidth: 375, // This will set the background so it is not moving
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: transitionDuration,
      }),
    },
    contentShift: {
      marginLeft: responsiveDrawer,
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: transitionDuration,
      }),
    },
  };
};

// End of styling

type Props = {};

const NavDrawer = (props: Props) => {
  const theme = useTheme();
  // Boolean value that dynamically detects the screen size so anything > 375 calls this mediaQuery
  const largerThan375 = useMediaQuery('min-width: 376px');
  const [open, setOpen] = useState(largerThan375);
  const responsiveDrawer = largerThan375 ? drawerWidth : '100%';

  // Dynamically set our open value with useEffect
  useEffect(() => {
    setOpen(largerThan375);
  }, [largerThan375]);

  return (
    <BrowserRouter>
      <div>
        {/* The sx is similar to inline styling but it injects into the classes that are being rendered */}
        <AppBar
          position='fixed'
          sx={themedStyles(theme, responsiveDrawer).appBar}
        >
          <Toolbar>
            <IconButton
              color='inherit'
              edge='start'
              onClick={() => {
                setOpen(!open);
              }}
              sx={{
                ...themedStyles(theme, responsiveDrawer).menuButton,
                display: largerThan375 ? 'none' : '',
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant='h6'
              noWrap
            >
              MUI v5 Styling Examples
            </Typography>
          </Toolbar>
        </AppBar>
        {/* The drawer has a z-index of 1200 so it will display over to the left of the Navbar */}
        <Drawer
          variant='temporary'
          open={open}
          sx={themedStyles(theme, responsiveDrawer).drawer}
          PaperProps={{
            sx: themedStyles(theme, responsiveDrawer).drawerPaper,
            // Elevation is just access to boxshadow pretty cool right
            // 9 is not a box shadow so what does 9 mean
            // Default theme starts at 0 - 24 and 9 is one of those values
            // We could have also used boxShadow but MUI gives this to us now as of v5
            elevation: 9,
          }}
          disableEnforceFocus
          transitionDuration={{
            enter: transitionDuration,
            exit: transitionDuration,
          }}
        >
          <Toolbar />
          <List>
            {[
              { text: 'Input Form', route: '/form' },
              { text: 'Contact Card Grid', route: '/grid' },
              { text: 'Contact Table', route: '/table' },
              { text: 'Contact Data Grid', route: '/datagrid' },
            ].map((nav, index) => (
              <ListItem
                sx={{
                  borderBottom: '1px solid black',
                  borderBottomColor: 'primary.main',
                }}
                key={nav.text}
              >
                <Link to={nav.route || '/'}>{nav.text}</Link>
              </ListItem>
            ))}
          </List>
        </Drawer>
        {/* Be wary of using inline styles as they can affect accessibility if it looks cool but isn't accessible it is useless */}
        <main
          style={{
            ...themedStyles(theme, responsiveDrawer).content,
            ...(open ? themedStyles(theme, responsiveDrawer).contentShift : {}),
          }}
        >
          <Toolbar />
          <ThemeProvider theme={ModifiedTheme}>
            <Routes>
              <Route
                // Best practices are to always have  a default route
                path={'/'}
                element={<ContactForm />}
              />
              <Route
                // Best practices are to always have  a default route
                path={'/form'}
                element={<ContactForm />}
              />
              <Route
                path={'/grid'}
                element={<ContactCardGrid />}
              />
              <Route
                path={'/table'}
                element={<ContactTable />}
              />
              <Route
                path={'/datagrid'}
                element={<ContactDataGrid />}
              />
            </Routes>
          </ThemeProvider>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default NavDrawer;
