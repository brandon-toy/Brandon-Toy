import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import '../background.scss';
import WorkExperience from './ResumeComponents/WorkExperience';
import Info from './ResumeComponents/Info';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    margin: 'auto',
  },
  gridroot: {
    [theme.breakpoints.down('sm')]: {
      paddingTop: 25,
      margin: 10,
      justifyContent: 'center',
    },
    [theme.breakpoints.up('md')]: {
      marginLeft: 50,
      paddingTop: 50,
    },
    display: 'flex',
    justifyContent: 'center',
  },
  rightSide: {
    [theme.breakpoints.up('lg')]: {
      paddingLeft: 50,
    },
    [theme.breakpoints.down('md')]: {
      paddingTop: 25,
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
