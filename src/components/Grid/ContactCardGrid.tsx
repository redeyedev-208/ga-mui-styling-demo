import React, { useState } from 'react';
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Collapse,
  Grid,
  List,
  ListSubheader,
  Typography,
} from '@mui/material';
import { contactData } from '../../Data/ContactData';

type Props = {};

const ContactCardGrid = (props: Props) => {
  // We add some state to handle the button that is collapsing all of the stuff "aka cards"
  const [open, setOpen] = useState(true);
  return (
    // m = 8 it is applying a value for the spacing function (take whatever is passed in and mulitply it by 8)
    // Our custom theme is going to pull in the default for us, we can just customize what we need and accept the defaults as needed
    <Box
      m={1}
      // display='flex' Note: these are here for reference to demonstrate the difference between a Box and Stack component
      // flexDirection='row'
      // justifyContent='center'
      // alignItems='flex-end'
    >
      <Button
        sx={{ marginBottom: 3 }}
        onClick={() => setOpen(!open)}
        variant='outlined'
      >
        Click to open or close
      </Button>
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
                <Collapse
                  in={open}
                  timeout={1000}
                  // orientation='horizontal'
                >
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
                        return (
                          <li style={{ paddingBottom: '2px' }}>{skill}</li>
                        );
                      })}
                    </List>
                  </CardContent>
                </Collapse>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default ContactCardGrid;
