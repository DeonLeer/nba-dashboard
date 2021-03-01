import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Paper from '@material-ui/core/Paper';
// Buttons
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import SportsBasketballIcon from '@material-ui/icons/SportsBasketball';
// CSS
import './navbar.css'
// Game Scores Dashboard
import GameScores from './gameScores.js';
import Search from './search'
import {
  Link
} from "react-router-dom";


const drawerWidth = 208;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    fontFamily:'Roboto, sans-serif'
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: '#311b92',
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  },
  title: {
    flexGrow: 1,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerOpen: {
    backgroundColor: '#131313',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(26) + 1,
    },
  },
  drawerClose: {
    backgroundColor: '#131313',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(7) + 1,
    },
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(2.5),
  },
  toolbar: {
    display: 'flex',
    alignItems: 'right',
    justifyContent: 'right',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 0,
  },
  home: {
    textDecoration: 'none',
    color: 'white',
    fontFamily:'Roboto, sans-serif'
  },
  paperAlt: {
    maxWidth: 200,
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2),
    background: 'transparent',
    textEmphasis: 'bold',
    fontSize: 18,
    marginRight: '18px',
    color: 'gold'
  },
  link: {
    textDecoration: 'none',
    color: 'black',
    textDecoration: 'underline'
  }
}));

export default function Navbar() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const d = new Date().toLocaleString("en-US", {timeZone: "America/Los_Angeles"});
  const months = {'1': "Jan", '2': "Feb", '3': "Mar", '4': "Apr", '5': "May", '6': "Jun", '7': "Jul", '8': "Aug", '9': "Sep", '10': "Oct", '11': "Nov", '12': "Dec",}
  console.log(d)
  const currentDay = d.substring(2,3);
  const currentYear = d.substring(4, 8);
  const monthString = d.substring(0,1);
  const currentMonth = months[monthString];

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <a href={"http://localhost:3000/"}><img src={"/images/logo.png"} alt="logo" /></a>
          <a href={"http://localhost:3000/"} className={classes.home}><h2>NBA Dashboard</h2></a>
          <Typography variant="h6" noWrap className={classes.title}>
            
          </Typography>
          <Search />
          <Paper className={classes.paperAlt}> {currentMonth} {currentDay}, {currentYear}</Paper>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerOpen}
            className={clsx(open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        <GameScores />
      </main>
      <Drawer
        anchor="right"
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          <Link to='/players'>
            <ListItem button key={'Players'}>
              <ListItemIcon><AccountBoxIcon /></ListItemIcon>
              <ListItemText className={classes.link}  primary={'Players'} />
            </ListItem>
          </Link>
          <Link to='/standings'>
            <ListItem button key={'Standings'}>
              <ListItemIcon><SportsBasketballIcon /></ListItemIcon>
            <ListItemText className={classes.link}  primary={'Standings'} />
          </ListItem>
          </Link>
        </List>
        <Divider />
        <List>
          <Link to='/leaders'>
            <ListItem button key={'Leaders'}>
              <ListItemIcon><EqualizerIcon /></ListItemIcon>
              <ListItemText className={classes.link}  primary={'Leaders'} />
            </ListItem>
          </Link>
          {/* <ListItem button key={'Compare'}>
              <ListItemIcon><CompareArrowsIcon /></ListItemIcon>
              <ListItemText primary={'Compare'} />
          </ListItem> */}
        </List>
      </Drawer>
    </div>
  );
}
