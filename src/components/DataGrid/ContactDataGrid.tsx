import { DataGrid, GridRenderCellParams } from '@mui/x-data-grid';
import { useTheme, Theme } from '@mui/material/styles';
import { contactData } from '../../Data/ContactData';

type Props = {};
const columns = (theme: Theme) => [
  {
    field: 'name',
    headerName: 'Name',
    minWidth: 150,
    renderCell: (cellValues: GridRenderCellParams<string>) => {
      // debugger;
      return cellValues.value;
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
];

const ContactDataGrid = (props: Props) => {
  const rows = () => [...contactData];
  const theme = useTheme();

  return (
    <div style={{ height: 650 }}>
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
