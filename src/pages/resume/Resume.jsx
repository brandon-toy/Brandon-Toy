import React from 'react';
import {
  Typography, Grid, Avatar, makeStyles, Card, CardMedia, CardContent, CardHeader,
} from '@material-ui/core';
import '../background.scss';
import WorkExperience from './ResumeComponents/WorkExperience';
import Info from './ResumeComponents/Info';

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down('sm')]: {
      paddingTop: 25,
      marginLeft: '2%',
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
  },
}));


export default function Resume() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid
        container
        direction="row"
        // justify="flex-start"
        // alignItems="flex-start"
        className={classes.root}
      >
        <Grid item>
          <Info />
        </Grid>
        <Grid className={classes.rightSide} item xs={4}>
          <WorkExperience />
        </Grid>
      </Grid>
    </div>
  );
}
