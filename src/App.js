// import React, { Component, Fragment } from 'react';
// import ReactDOM from "react-dom"
// import { Link, withRouter } from 'react-router-dom';
// import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';
// import Drawer from '@material-ui/core/Drawer';
// import ListItemText from '@material-ui/core/ListItemText';
// import Collapse from '@material-ui/core/Collapse';
// import { makeStyles, Hidden } from '@material-ui/core';
// import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
// import { fab } from '@fortawesome/free-brands-svg-icons';
// import { library } from '@fortawesome/fontawesome-svg-core';
// import './App.css';
// // import './drawerItems.js';

// library.add(fab, faPhone, faEnvelope);

// const useStyles = makeStyles((theme) => ({
//   root: {
//     width: '100%',
//     maxWidth: 360,
//     backgroundColor: theme.palette.background.paper,
//   },
//   nested: {
//     paddingLeft: theme.spacing(4),
//   },
//   drawerPaper: {
//     width: 240,
//   },
// }));

// const email = 'mailto:bgh.toy@gmail.com?subject=Found you on your awesome website!! &body=Hi Brandon, your website is very cool.';

// function User(props) {
//   return (
//     <h1>
//       Hello
//       {
//         props.match.params.username
//       }
//     </h1>
//   );
// }

// ReactDOM.render(
//   <Router>
//     <Route path="/user/:username" component={User} />
//   </Router>,
//   node,
// );


// class drawerItems extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     const { location: { pathname } } = this.props;
//     const classes = useStyles();
//     const [openSocialMedia, setOpenSocialMedia] = React.useState(false);
//     const [openQuickContact, setOpenQuickContact] = React.useState(false);
//     const handleClickSocialMedia = () => {
//       setOpenSocialMedia(!openSocialMedia);
//     };
//     const handleClickQuickContact = () => {
//       setOpenQuickContact(!openQuickContact);
//     };
//     return (
//       <div>
//         {/* <Drawer
//           variant="persistent"
//           open
//         >
//           {drawerItems}
//         </Drawer> */}
//         <Hidden xsDown implementation="css">
//           <Drawer
//             variant="permanent"
//             open
//             classes={
//               { paper: classes.drawerPaper }
//             }
//           >
//             {drawerItems}
//           </Drawer>
//         </Hidden>
//       </div>
//     );
//   }
// }

// export default drawerItems;
