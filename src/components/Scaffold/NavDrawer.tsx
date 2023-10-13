import {
  Drawer,
  AppBar,
  Toolbar,
  Typography,
  List,
  ListItem,
} from '@mui/material';
import ContactForm from '../Form/ContactForm';

import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import ContactCardGrid from '../Grid/ContactCardGrid';
import ContactTable from '../Table/ContactTable';
import ContactDataGrid from '../DataGrid/ContactDataGrid';
import { useTheme, Theme, ThemeProvider } from '@mui/material/styles';
import { ModifiedTheme } from '../../Theme/ModifiedTheme';

// These are for the styling and just commenting them for readability
const drawerWidth = 240;

let theme = {};
// The purpose of this is to dynamically create the zIndex on the AppBar
const themedStyles = (theme: Theme) => {
  return {
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
    },
  };
};

const simpleStyles = {
  drawer: {
    width: drawerWidth,
    '& .MuiBackdrop-root': {
      display: 'none',
    },
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: 'rgba(120,120, 120, 0.2)',
  },
  content: {
    marginLeft: drawerWidth,
    padding: 3,
    maxWidth: 720,
  },
};

// End of styling

type Props = {};

const NavDrawer = (props: Props) => {
  const theme = useTheme();
  return (
    <BrowserRouter>
      <div>
        {/* The sx is similar to inline styling but it injects into the classes that are being rendered */}
        <AppBar
          position='fixed'
          sx={themedStyles(theme).appBar}
        >
          <Toolbar>
            <Typography
              variant='h6'
              noWrap
            >
              MUI Components Demo
            </Typography>
          </Toolbar>
        </AppBar>
        {/* The drawer has a z-index of 1200 so it will display over to the left of the Navbar */}
        <Drawer
          variant='temporary'
          open={true}
          sx={simpleStyles.drawer}
          PaperProps={{
            sx: simpleStyles.drawerPaper,
            // Elevation is just access to boxshadow pretty cool right
            // 9 is not a box shadow so what does 9 mean
            // Default theme starts at 0 - 24 and 9 is one of those values
            // We could have also used boxShadow but MUI gives this to us now as of v5
            elevation: 9,
          }}
          disableEnforceFocus
        >
          <Toolbar />
          <List>
            {[
              { text: 'Input Form', route: '/form' },
              { text: 'Contact Card Grid', route: '/grid' },
              { text: 'Contact Table', route: '/table' },
              { text: 'Contact Data Grid', route: '/datagrid' },
            ].map((nav, index) => (
              <ListItem key={nav.text}>
                <Link to={nav.route || '/'}>{nav.text}</Link>
              </ListItem>
            ))}
          </List>
        </Drawer>
        {/* Be wary of using inline styles as they can affect accessibility if it looks cool but isn't accessible it is useless */}
        <main style={simpleStyles.content}>
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
