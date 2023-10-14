import { DataGrid, GridRenderCellParams, GridToolbar } from '@mui/x-data-grid';
import { useTheme, Theme } from '@mui/material/styles';
import { contactData } from '../../Data/ContactData';
import { Box, Button } from '@mui/material';

type Props = {};

const handleExportClick = (cellValues: GridRenderCellParams) => {
  alert(
    `You have clicked on cell with id: ${cellValues.id} the data shape is listed in a console log`,
  );
  console.log(cellValues);
};

const datagridSx = {
  '& .MuiDataGrid-columnHeaders': {
    backgroundColor: 'primary.main',
    fontWeight: 'bold',
    fontSize: 18,
    color: 'white',
  },
  '& .MuiDataGrid-virtualScrollerRenderZone': {
    '& .MuiDataGrid-row': {
      '&:nth-of-type(2n)': { backgroundColor: 'grid.main' },
    },
  },
};

const columns = (theme: Theme) => [
  {
    field: 'name', // data
    headerName: 'Name', // what is actually displayed
    minWidth: 175,
    renderCell: (cellValues: GridRenderCellParams<string>) => {
      // debugger;
      // We are using Box here to demonstrate an easier approach for styling
      return (
        <Box sx={{ color: 'primary.main', fontSize: 18, fontWeight: 'bold' }}>
          {cellValues.value}
        </Box>
      );
    },
  },
  {
    field: 'role',
    headerName: 'Role',
    minWidth: 100,
    renderCell: (cellValues: GridRenderCellParams<string>) => {
      return cellValues.value;
    },
  },
  {
    field: 'skills',
    headerName: 'Skills',
    minWidth: 150,
    renderCell: (cellValues: GridRenderCellParams<string>) => {
      return (
        <div style={{ color: theme.palette.secondary.main }}>
          {cellValues.value ? cellValues.value[0] : ''}
        </div>
      );
    },
  },
  {
    field: 'startDate',
    headerName: 'Start Date',
    minWidth: 120,
    renderCell: (cellValues: GridRenderCellParams<string>) => {
      return cellValues.value;
    },
  },
  {
    field: 'preference',
    headerName: 'Work Preference',
    minWidth: 175,
    renderCell: (cellValues: GridRenderCellParams<string>) => {
      return cellValues.value;
    },
  },
  {
    // Our static contact data doesn't have a export attribute just a heads up
    field: 'Print',
    renderCell: (cellValues: GridRenderCellParams<string>) => {
      return (
        <Button
          variant='contained'
          color='primary'
          onClick={() => {
            handleExportClick(cellValues);
          }}
        >
          Print
        </Button>
      );
    },
  },
];

const ContactDataGrid = (props: Props) => {
  const rows = () => [...contactData];
  const theme = useTheme();

  return (
    <div style={{ height: 750, width: 850 }}>
      <DataGrid
        rows={rows()}
        columns={columns(theme)}
        pageSize={5}
        headerHeight={60}
        rowHeight={120}
        sx={datagridSx}
        components={{
          Toolbar: () => (
            // Note: We can only add what we would like from the Toolbar
            // To accomplish this we would change the Toolbar to GridToolbarContainer and add what we want
            // The great thing about this is that we can do so much by using everything only if it meets our needs accordingly
            <GridToolbar
              sx={{
                justifyContent: 'flex-end',
                '& button': { border: 'none' },
                '& .MuiBox-root': { display: 'none' }, // This is needed as a Box fills the right side so we need to remove it
              }}
            ></GridToolbar>
          ),
        }}
        initialState={{
          sorting: { sortModel: [{ field: 'name', sort: 'asc' }] },
        }}
      />
    </div>
  );
};

export default ContactDataGrid;
