import React from 'react';
import {
  Typography, Grid, Avatar, makeStyles, Card,
  CardMedia, CardContent, CardHeader, ListItemText, List, ListItem, Chip,
  CardActionArea,
} from '@material-ui/core';
import { sizing } from '@material-ui/system';
import boldLogo from '../../images/boldlogo.jpg';
import starbucks from '../../images/starbucks.png';
import python from '../../images/python.jpeg';
import js from '../../images/js.png';
import react from '../../images/react.png';
import java from '../../images/java.png';
import linkedin from '../../images/linkedin.png';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 'auto',
  },
  boldHeader: {
    paddingLeft: 10,
    paddingTop: 3,
  },
  linkedinCard: {
    [theme.breakpoints.up('md')]: {
      width: 450,
    },
    [theme.breakpoints.down('sm')]: {
      width: 400,
      marginBottom: 100,
    },
    [theme.breakpoints.down('xs')]: {
      width: 300,
      marginBottom: 100,
    },
    marginTop: 20,
    height: 65,
  },
  card: {
    [theme.breakpoints.up('md')]: {
      width: 450,
    },
    [theme.breakpoints.down('sm')]: {
      width: 400,
      marginTop: 50,
    },
    [theme.breakpoints.down('xs')]: {
      marginTop: 50,
      width: 300,
    },
  },
  techCard: {
    marginTop: 20,
    [theme.breakpoints.up('md')]: {
      width: 450,
    },
    [theme.breakpoints.down('sm')]: {
      width: 400,
    },
    [theme.breakpoints.down('xs')]: {
      width: 300,
    },
  },
  python: {
    paddingLeft: 5,
    width: 22,
    height: 22,
  },
  photo: {
    display: 'flex',
    width: 20,
    height: 20,
    paddingTop: 20,
    paddingLeft: 10,
    paddingBottom: 19,
  },
}));

export default function WorkExperience() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <CardHeader
          title="Work Experience"
        />
        <CardContent>
          <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="flex-start"
          >
            <Grid item>
              <Grid
                container
                direction="column"
                justify="flex-start"
                alignItems="flex-start"
              >
                <Grid item>
                  <Typography style={{ display: 'flex' }} variant="h6">
                    <Avatar
                      src={boldLogo}
                      style={{ display: 'flex' }}
                    />
                    <div className={classes.boldHeader}>Bold Commerce</div>
                  </Typography>
                </Grid>
                <Grid item>
                  <List>
                    <ListItemText>Agile Software Development</ListItemText>
                    <ListItemText>Worked with React, JavaScript & PHP</ListItemText>
                    <ListItemText>
                      <a target="__blank" href="https://boldcommerce.com/builderscode#slide=10" style={{ textDecoration: 'none', color: 'black' }}>BUILDERS Code</a>
                    </ListItemText>
                  </List>
                </Grid>
                <Grid style={{ paddingTop: '5px' }} item>
                  <Typography style={{ display: 'flex' }} variant="h6">
                    <Avatar
                      src={starbucks}
                      style={{ display: 'flex' }}
                    />
                    <div className={classes.boldHeader}>Starbucks</div>
                  </Typography>
                </Grid>
                <Grid item>
                  <List>
                    <ListItemText>Can make burnt coffee</ListItemText>
                    <ListItemText>Good at spelling names wrong</ListItemText>
                    <ListItemText>Has cool green apron</ListItemText>
                  </List>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      <Card className={classes.techCard}>
        <CardHeader
          title="Technologies"
        />
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
          spacing={2}
          style={{ paddingLeft: 10 }}
        >
          <Grid item>
            <Chip
              variant="outlined"
              avatar={<Avatar src={python} className={classes.python} />}
              label="Python"
            />
          </Grid>
          <Grid item>
            <Chip
              variant="outlined"
              avatar={(<Avatar src={js} />)}
              label="JavaScript"
            />
          </Grid>
          <Grid item>
            <Chip
              variant="outlined"
              avatar={(<Avatar src={react} />)}
              label="React.js"
            />
          </Grid>
          <Grid item>
            <Chip
              variant="outlined"
              avatar={(<Avatar src={java} className={classes.python} />)}
              label="Java"
            />
          </Grid>
        </Grid>
        <br />
      </Card>
      <a href="https://linkedin.com/in/btoy">
        <Card className={classes.linkedinCard}>
          <CardActionArea>
            <div style={{ display: 'flex', paddingTop: 5, paddingLeft: 5 }}>
              <img src={linkedin} className={classes.photo} alt="linkedin" />
              <Typography
                variant="h6"
                style={{
                  display: 'flex', paddingTop: 14, paddingLeft: 5,
                }}
              >
                View More!
              </Typography>
            </div>
          </CardActionArea>
        </Card>
      </a>
    </div>
  );
}
