import React from 'react';
import {
  Typography, makeStyles, Card, CardMedia, CardContent,
} from '@material-ui/core';
import image from '../../images/me.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down('xs')]: {
      width: 300,
    },
  },
  introResume: {
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0,
    },
    marginTop: 5,
  },
  photo: {
    width: 400,
    height: 400,
    [theme.breakpoints.down('xs')]: {
      width: 300,
      height: 300,
    },
  },
}));

export default function Info() {
  const classes = useStyles();
  return (
    <div>
      <Card className={classes.root}>
        <CardMedia className={classes.photo} component="img" src={image} title="Some title" />
        <CardContent>
          <Typography variant="h3">Brandon Toy</Typography>
          <div className={classes.introResume}>
            <Typography variant="body1">
                    3rd year - BSc Computer Science
            </Typography>
            <div />
            <Typography variant="body1">
                    University of Victoria
            </Typography>
            <div />
            <Typography variant="body1">bgh.toy@gmail.com</Typography>
            <div />
            <Typography variant="body1">
                    (778).919.7095
            </Typography>
            <div />
            <Typography variant="body1">
                    Expected Graduation: 2022
            </Typography>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
