import React from 'react';
import {
  List, ListItem, MenuList, MenuItem, Collapse, makeStyles, ListItemText,
} from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faMobile } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import './Drawer.css';

library.add(fab, faMobile, faEnvelope);

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: '#2B3E50',
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  drawerText: {
    color: 'white',
    fontWeight: 'bold',
  },
}));

export default function DrawerItems(props) {
  const [openSocialMedia, setOpenSocialMedia] = React.useState(false);
  const [openQuickContacts, setOpenQuickContacts] = React.useState(false);
  const classes = useStyles();
  const email = 'mailto:bgh.toy@gmail.com?subject=Found you on your awesome website!! &body=Hi Brandon, your website is very cool.';
  const clickSocialMedia = () => {
    setOpenSocialMedia(!openSocialMedia);
  };
  const clickQuickContacts = () => {
    setOpenQuickContacts(!openQuickContacts);
  };
  return (
    <div className={classes.root}>
      <MenuList>
        <MenuItem className={classes.drawerText} component={Link} to="/about">about</MenuItem>
        {/* <MenuItem className={classes.drawerText} component={Link} to="/projects">projects</MenuItem> */}
        <MenuItem className={classes.drawerText} component={Link} to="/resume">resume</MenuItem>
        <MenuItem
          className={classes.drawerText}
          onClick={clickSocialMedia}
        >
          social media
          {openSocialMedia ? <ArrowDropDownIcon /> : <ArrowDropUpIcon />}
        </MenuItem>
        <Collapse in={openSocialMedia} timeout="auto" unmountOnExit>
          <List component="div">
            <ListItem component="a" href="https://linkedin.com/in/btoy" button className={classes.nested}>
              <ListItemText className={classes.drawerText}>linkedin</ListItemText>
              <FontAwesomeIcon className={classes.drawerText} icon={['fab', 'linkedin']} />
            </ListItem>
            <ListItem component="a" href="https://github.com/brandon-toy" button className={classes.nested}>
              <ListItemText className={classes.drawerText}>github</ListItemText>
              <FontAwesomeIcon className={classes.drawerText} icon={['fab', 'github']} />
            </ListItem>
          </List>
        </Collapse>
        <MenuItem
          className={classes.drawerText}
          onClick={clickQuickContacts}
        >
          quick contact
          {openQuickContacts ? <ArrowDropDownIcon /> : <ArrowDropUpIcon />}
        </MenuItem>
        <Collapse in={openQuickContacts} timeout="auto" unmountOnExit>
          <List component="div">
            <ListItem component="a" href="tel:7789197095" button className={classes.nested}>
              <ListItemText className={classes.drawerText}>778.919.7095</ListItemText>
              <FontAwesomeIcon className={classes.drawerText} icon="mobile" />
            </ListItem>
            <ListItem component="a" href={email} button className={classes.nested}>
              <ListItemText className={classes.drawerText}>bgh.toy@gmail.com</ListItemText>
              <FontAwesomeIcon className={classes.drawerText} icon="envelope" />
            </ListItem>
          </List>
        </Collapse>
      </MenuList>
    </div>
  );
}
