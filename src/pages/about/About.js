import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import ProfileCard from './aboutComponents/ProfileCard';
import ModalButton from './aboutComponents/ModalButton';
import '../background.scss';

const useStyles = makeStyles(() => ({
  containerDiv: {
    display: 'flex',
    paddingTop: '7%',
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
