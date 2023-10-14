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

// Adding a constant here that is close to the tallest height for cards regardless of skills so we are looking at 3 for example
const contactLineHeight = 24;
let maxSkills = 1;

type Props = {};

const ContactCardGrid = (props: Props) => {
  // We add some state to handle the button that is collapsing all of the stuff "aka cards"
  const [open, setOpen] = useState(true);
  const gridAlignProps = open
    ? {}
    : {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
      };
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
      {/* Grid is similar to Bootstrap in that a 12 column layout that can be customized */}
      {/* Note: Also worth to mention that controlling a component at it's own level
      at times is just a matter of preference */}
      <Grid
        container
        spacing={2}
        sx={{ width: 700, backgroundColor: 'grid.main' }}
      >
        {contactData.map((contact) => {
          maxSkills =
            (contact.skills?.length || 0) > maxSkills
              ? contact.skills?.length || 0
              : maxSkills;
          return (
            <Grid
              item
              key={contact.name}
              xs={open ? 6 : 12}
              sx={{ ...gridAlignProps, minHeight: 300 }}
            >
              <Card sx={{ width: 300, boxShadow: 6 }}>
                <CardHeader
                  sx={{
                    borderBottom: '1px solid',
                    borderBottomColor: 'primary.main',
                  }}
                  title={contact.name}
                  subheader={contact.role}
                  avatar={
                    <Avatar sx={{ backgroundColor: 'primary.main' }}>
                      {contact.name?.substring(0, 2).toUpperCase() || 'A'}
                    </Avatar>
                  }
                />
                <Collapse
                  in={open}
                  timeout={1000}
                  // orientation='horizontal'
                >
                  <CardContent
                    sx={{ height: 104 + maxSkills * contactLineHeight }}
                  >
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
