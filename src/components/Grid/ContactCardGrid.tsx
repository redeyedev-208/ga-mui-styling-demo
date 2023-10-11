import React from 'react';
import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Grid,
  List,
  ListSubheader,
  Typography,
} from '@mui/material';
import { contactData } from '../../Data/ContactData';

type Props = {};

const ContactCardGrid = (props: Props) => {
  return (
    <Grid
      container
      spacing={2}
      sx={{ width: 700 }}
    >
      {contactData.map((contact) => {
        return (
          <Grid
            item
            key={contact.name}
          >
            <Card sx={{ width: 300 }}>
              <CardHeader
                title={contact.name}
                subheader={contact.role}
                avatar={
                  <Avatar>
                    {contact.name?.substring(0, 2).toUpperCase() || 'A'}
                  </Avatar>
                }
              />

              <CardContent>
                <Typography>
                  <b>Start Date: </b> {contact.startDate}
                </Typography>
                <Typography>
                  <b>Work Preference: </b> {contact.preference}
                </Typography>
                <List
                  sx={{
                    listStyle: 'list-item',
                    listStyleType: 'circle',
                    paddingLeft: 2,
                  }}
                  subheader={
                    <ListSubheader
                      sx={{
                        right: 16,
                        position: 'inherit',
                        fontSize: '1.25rem',
                        color: 'black',
                        paddingLeft: 0,
                      }}
                    >
                      Skills:
                    </ListSubheader>
                  }
                >
                  {contact.skills?.map((skill) => {
                    return <li style={{ paddingBottom: '2px' }}>{skill}</li>;
                  })}
                </List>
              </CardContent>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default ContactCardGrid;
