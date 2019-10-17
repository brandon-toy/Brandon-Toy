import React from 'react';
import {
  Typography, Grid, Avatar, makeStyles, Card, CardMedia, CardContent, CardHeader,
} from '@material-ui/core';
import '../background.scss';
import WorkExperience from './ResumeComponents/WorkExperience';
import Info from './ResumeComponents/Info';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    paddingTop: 25,
  },
  gridroot: {
    [theme.breakpoints.down('sm')]: {
      paddingTop: 25,
      margin: 10,
      justifyContent: 'center',
    },
    [theme.breakpoints.up('md')]: {
      marginLeft: 50,
      paddingTop: 25,
    },
    display: 'flex',
  },
  rightSide: {
    [theme.breakpoints.up('lg')]: {
      paddingLeft: 50,
    },
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
    },
  },
}));


export default function Resume() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid
        container
        direction="row"
        className={classes.gridroot}
      >
        <Grid item>
          <Info />
        </Grid>
        <Grid className={classes.rightSide} item>
          <WorkExperience />
        </Grid>
      </Grid>
    </div>
  );
}
