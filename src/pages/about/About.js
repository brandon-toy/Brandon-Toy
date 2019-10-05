import React from 'react';
import { Grid, makeStyles, Card } from '@material-ui/core';
import ProfileCard from './aboutComponents/ProfileCard';
import photo from './aboutComponents/goldstream.jpg';
import '../background.scss';
import ModalButton from './aboutComponents/ModalButton';

const useStyles = makeStyles((theme) => ({
  containerDiv: {
    display: 'flex',
    paddingTop: '7%',
  },
  image: {
    width: 250,
  },
}));

function About() {
  const classes = useStyles();
  return (
    <div className={classes.containerDiv}>
      <Grid
        container
        direction="column"
        justify="flex-start"
        alignItems="center"
      >
        {/* <img className={classes.image} src={photo} alt="me" /> */}
        <Grid style={{ margin: 'auto' }} item>
          <ProfileCard />
        </Grid>
        <Grid style={{ margin: 'auto', marginTop: 40 }} item>
          <ModalButton />
        </Grid>
      </Grid>
    </div>
  );
}

export default About;
