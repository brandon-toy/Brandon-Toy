import React from 'react';
import {
  Button, Modal, Paper, makeStyles, Typography,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    padding: theme.spacing(2, 4, 3),
    outline: 0,
    maxWidth: 500,
  },
}));

export default function ModalButton() {
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClick}>a lil more about me</Button>
      <Modal
        open={open}
        onClose={handleClick}
        className={classes.modal}
      >
        <Paper className={classes.paper}>
          <Typography variant="h4">
              btoy
          </Typography>
          <br />
          <Typography variant="p">
            I am a student at the University of Victoria striving to grow and learn through new experiences.
            I am currently living in Winnipeg and on co-op at the company, Bold Commerce.
            I have a passion for all things food. I love talking about food, making food, and of course, eating food.
            As a good Canadian, I grew up playing hockey and I love watching and talking all things Canucks/NHL related.
            I am always down to get bubble tea or a green tea frappuccino (not a coffee drinker).
            If you would like to meet and talk to me, shoot me a DM or email!
            I would love to meet you!
          </Typography>
        </Paper>

      </Modal>
    </div>
  );
}
