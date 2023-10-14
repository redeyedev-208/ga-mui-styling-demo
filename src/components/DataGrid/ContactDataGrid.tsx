import { DataGrid, GridRenderCellParams } from '@mui/x-data-grid';
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
    minWidth: 150,
    renderCell: (cellValues: GridRenderCellParams<string>) => {
      return cellValues.value;
    },
  },
  {
    // Our static contact data doesn't have a export attribute just a heads up
    field: 'Export',
    renderCell: (cellValues: GridRenderCellParams<string>) => {
      return (
        <Button
          variant='contained'
          color='primary'
          onClick={() => {
            handleExportClick(cellValues);
          }}
        >
          Export
        </Button>
      );
    },
  },
];

const ContactDataGrid = (props: Props) => {
  const rows = () => [...contactData];
  const theme = useTheme();

  return (
    <div style={{ height: 700, width: 820 }}>
      <DataGrid
        rows={rows()}
        columns={columns(theme)}
        pageSize={5}
        headerHeight={60}
        rowHeight={120}
      />
    </div>
  );
};

export default ContactDataGrid;
