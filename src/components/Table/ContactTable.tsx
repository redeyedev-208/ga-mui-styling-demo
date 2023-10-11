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

const ContactTable = (props: Props) => {
  return (
    <TableContainer>
      {/* Table is based on rows and not columns in the data grid */}
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Role</TableCell>
            <TableCell>Skills</TableCell>
            <TableCell>Start Date</TableCell>
            <TableCell>Preference</TableCell>
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
                        <TableCell key={contact.id + key}>
                          {value.join(', ')}
                        </TableCell>
                      );
                    }
                    if (key !== 'id') {
                      return (
                        <TableCell key={contact.id + key}>{value}</TableCell>
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
