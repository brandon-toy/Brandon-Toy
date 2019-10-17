import React from 'react';
import '../background.scss';
import { makeStyles, Grid, Card } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  card: {
    maxWidth: 345,
  },
}));

export default function Projects() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid>
        <Grid item>
          <Card className={classes.card}>
            Hello there
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
