import React from 'react';
import {
  Card, makeStyles, Typography, Grid, CardContent,
} from '@material-ui/core';
import CardMedia from '@material-ui/core/CardMedia';
import photo from './goldstream.jpg';


const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: 400,
    [theme.breakpoints.down('xs')]: {
      marginTop: '15%',
      width: 250,
    },
  },
  content: {
    display: 'flex',
    paddingLeft: theme.spacing(4),
  },
  photo: {
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'center',
    width: 400,
    height: 400,
    [theme.breakpoints.down('xs')]: {
      width: 250,
      height: 250,
    },
  },
  location: {
    fontSize: '1.5vw',
  },
}));

export default function ProfileCard() {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardMedia className={classes.photo} component="img" src={photo} title="Some title" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          Brandon Toy
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          <span aria-label="emoji" role="img">️️✈️</span>
          Winnipeg, Manitoba
          <br />
          <span aria-label="emoji" role="img">🏫</span>
          University of Victoria - Computer Science
          <br />
          <span aria-label="emoji" role="img">💻</span>
          Software Developer Co-op at Bold Commerce
        </Typography>
      </CardContent>
    </Card>
  );
}
