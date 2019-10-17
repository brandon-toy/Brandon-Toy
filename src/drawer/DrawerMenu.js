import React from 'react';
import {
  Drawer, makeStyles, Hidden, AppBar, IconButton, Collapse, Container,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import DrawerItems from './DrawerItems';
import Main from '../Main';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  paper: {
    width: 300,
    backgroundColor: '#2B3E50',
  },
  mobilePaper: {
    width: 250,
    backgroundColor: '#2B3E50',
  },
  drawer: {
    width: 300,
    flexShrink: 0,
  },
  name: {
    color: 'white',
    fontSize: '40px',
    paddingTop: 15,
    paddingLeft: 15,
  },
  subName: {
    color: 'white',
    fontSize: '20px',
    paddingLeft: 15,
    paddingBottom: 5,
  },
  appBar: {
    top: 'auto',
    bottom: 0,
    backgroundColor: '#2B3E50',
  },
  menuIcon: {
    textAlign: 'center',
  },
  content: {
    color: 'white',
    flexGrow: 0,
    textAlign: 'center',
    padding: theme.spacing(3),
  },
  toolbar: theme.mixins.toolbar,
}));

export default function DrawerMenu() {
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = React.useState(true);

  const clickMobileOpen = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <div className={classes.root}>
      <Hidden xsDown implementation="css">
        <Drawer
          className={classes.drawer}
          variant="persistent"
          open
          classes={{
            paper: classes.paper,
          }}
        >
          <div className={classes.name}>Brandon Toy</div>
          <div className={classes.subName}>
              My dream is to travel the
            <span style={{ fontSize: '15px' }} role="img" aria-label="" label="emoji">
              <span> </span>
              🌏
            </span>
          </div>
          <DrawerItems />
        </Drawer>
      </Hidden>
      <Hidden smUp implementation="css">
        <Drawer
          className={classes.drawer}
          variant="temporary"
          open={!mobileOpen}
          classes={{
            paper: classes.mobilePaper,
          }}
          onClose={clickMobileOpen}
        >
          <DrawerItems />

        </Drawer>
        <AppBar position="fixed" className={classes.appBar} onClick={clickMobileOpen}>
          <Collapse in={mobileOpen}>
            <IconButton className={classes.menuIcon} color="inherit" aria-label="open drawer">
              <MenuIcon />
            </IconButton>
          </Collapse>
        </AppBar>
      </Hidden>
      <Container fixed>
        <Main />
      </Container>
    </div>
  );
}
