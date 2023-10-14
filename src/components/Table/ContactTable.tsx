import React from 'react';
import {
  Table,
  TableBody,
  TableContainer,
  TableCell,
  TableHead,
  TableRow,
} from '@mui/material';
import { contactData } from '../../Data/ContactData';

type Props = {};

const borderColor = {
  borderBottomColor: 'primary.main',
};

const ContactTable = (props: Props) => {
  return (
    <TableContainer
      sx={{
        borderRadius: 1,
        boxShadow: 4,
        margin: 1,
        width: 'calc(100% - 16px)',
      }}
    >
      {/* Table is based on rows and not columns in the data grid (smaller data sets) */}
      {/* This is different than Data Grids which is built upon actual columns (larger data sets) */}
      <Table>
        <TableHead>
          <TableRow
            sx={{
              backgroundColor: 'grid.main',
            }}
          >
            <TableCell sx={{ ...borderColor, width: '30%' }}>Name</TableCell>
            <TableCell sx={{ ...borderColor, width: '17%' }}>Role</TableCell>
            <TableCell sx={{ ...borderColor, width: '17%' }}>Skills</TableCell>
            <TableCell sx={{ ...borderColor, width: '17%' }}>
              Start Date
            </TableCell>
            <TableCell sx={{ ...borderColor, width: '19%' }}>
              Preference
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {contactData.map((contact) => {
            return (
              <TableRow key={contact.id}>
                {
                  // Short hand for giving us access to the key and the value
                  Object.entries(contact).map(([key, value]) => {
                    if (key === 'skills') {
                      return (
                        <TableCell
                          sx={{ ...borderColor }}
                          key={contact.id + key}
                        >
                          {value.join(', ')}
                        </TableCell>
                      );
                    }
                    if (key === 'name') {
                      return (
                        <TableCell
                          onClick={(event: React.MouseEvent<HTMLElement>) => {
                            alert(`You have clicked on ${contact.name}`);
                            console.log((event.target as Element).innerHTML);
                          }}
                          sx={{
                            // ...borderColor,
                            backgroundColor: 'primary.light',
                            color: 'white',
                            border: ' 1px solid white',
                          }}
                          key={contact.id + key}
                        >
                          {value}
                        </TableCell>
                      );
                    }
                    if (key !== 'id') {
                      return (
                        <TableCell
                          sx={{ ...borderColor }}
                          key={contact.id + key}
                        >
                          {value}
                        </TableCell>
                      );
                    }
                    return '';
                  })
                }
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ContactTable;
