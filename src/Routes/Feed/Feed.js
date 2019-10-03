import React, {useState, useEffect} from 'react';

import './Feed.css';

//Material UI
import {Grid} from '@material-ui/core'

//Icons
import { MdAssignment, MdMessage, MdNotifications, MdDashboard, MdSettings, MdList, MdSearch, MdReorder, MdClose } from "react-icons/md";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';


import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

//CardData
import CardData from './menuitems.js';
import Cardo from './Card';

export default () => {
  const [height, setHeight] = useState(window.innerHeight);
  const [width, setWidth] = useState(window.innerWidth);
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  const [selectedItem, setSelectedItem] = useState(0)

  function handleSelectItem(index){
    setSelectedItem(index);
  }

  useEffect(() => {
    window.onresize = function(event) {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };
    console.log(CardData)
  })

  const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      backgroundColor: '#1b1b29',
      color: '#fff',
    
    },
    menuButton: {
      marginRight: theme.spacing(2),
      backgroundColor: '#1b1b29',
    },
    title: {
      flexGrow: 1,
      display: 'none',
      backgroundColor: '#1b1b29',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
        
      },
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: '#1b1b29',
      '&:hover': {
        backgroundColor: '#1b1b29',
      },
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
      },
    },
    searchIcon: {
      width: theme.spacing(7),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#1b1b29',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 7),
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: 120,
        '&:focus': {
          width: 200,
        },
      },
    },
    
  }));
  
  function SearchAppBar() {
    const classes = useStyles();
  
    return (
      <div className={classes.root}>
        <AppBar style={{backgroundColor: '#1b1b29',width: '100%'}} position="static">
          <Toolbar>
            
            <Typography className={classes.title} variant="h6" noWrap>
              Popular
            </Typography>
            <Typography className={classes.title} variant="h6" noWrap>
              Education
            </Typography>
            <Typography className={classes.title} variant="h6" noWrap>
              Game
            </Typography>
            <Typography className={classes.title} variant="h6" noWrap>
              Music
            </Typography>
            <Typography className={classes.title} variant="h6" noWrap>
              Video
            </Typography>
            <Typography className={classes.title} variant="h6" noWrap>
              Development
            </Typography>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
              />
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }

  

  return (
    <div>
      <div className="SideMenu" style={{height: height, zIndex: 50}}>
      {drawerIsOpen === true && 
            <div className="DrawerContent" style={{width: width * 0.65}}>
                <MdClose onClick={() => {
                  setDrawerIsOpen(!drawerIsOpen)
                }} className="DrawerCloseIcon"></MdClose>
                <h6 onMouseMove={() => console.log("dadsdas")} className='NameDrawerResponsive' variant="h6" noWrap>
                  Popular
                </h6>
                <h6 className='NameDrawerResponsive' variant="h6" noWrap>
                  Education
                </h6>
                <h6 className='NameDrawerResponsive' variant="h6" noWrap>
                  Game
                </h6>
                <h6 className='NameDrawerResponsive' variant="h6" noWrap>
                  Music
                </h6>
                <h6 className='NameDrawerResponsive' variant="h6" noWrap>
                  Video
                </h6>
                <h6 className='NameDrawerResponsive' variant="h6" noWrap>
                  Development
                </h6>
        </div>}
        <div className="TitleContainer">
            {width > 550 ? <h2 className="Title"><span className="Title1">Courses</span><span className="Title2">.co</span></h2> : <MdReorder onClick={() => {
              setDrawerIsOpen(!drawerIsOpen);
            }} className="IconResponsiveDrawer"></MdReorder>}
        </div>
        <div className="SideIcons">
          <div className="IconsContainer">
            
            <div className="IconContainer" style={{backgroundColor: selectedItem === 0 ? '#ff6e85' : 'transparent'}} onClick={() => {handleSelectItem(0)}}>
              <MdAssignment className="Icon"></MdAssignment>
              {width > 550 ? <h5 className="PageDetector">Home</h5> : null}
            </div>
            <div className="IconContainer" style={{backgroundColor: selectedItem === 1 ? '#ff6e85' : 'transparent'}} onClick={() => {handleSelectItem(1)}}>
              <MdNotifications className="Icon"></MdNotifications>
              {width > 550 ? <h5 className="PageDetector">Notification</h5> : null}
            </div>
            <div className="IconContainer" style={{backgroundColor: selectedItem === 2 ? '#ff6e85' : 'transparent'}} onClick={() => {handleSelectItem(2)}}>
              <MdMessage className="Icon"></MdMessage>
              {width > 550 ? <h5 className="PageDetector">Messages</h5> : null}
            </div>
            <div className="IconContainer" style={{backgroundColor: selectedItem === 3 ? '#ff6e85' : 'transparent'}} onClick={() => {handleSelectItem(3)}}>
              <MdDashboard className="Icon"></MdDashboard>
              {width > 550 ? <h5 className="PageDetector">Dashboard</h5> : null}
            </div>
            <div className="IconContainer" style={{backgroundColor: selectedItem === 4 ? '#ff6e85' : 'transparent'}} onClick={() => {handleSelectItem(4)}}>
              <MdSettings className="Icon"></MdSettings>
              {width > 550 ? <h5 className="PageDetector">Settings</h5> : null}
            </div>
            
          </div>
        </div>
      </div>
      <main>
        {SearchAppBar()}
        <div className="CardsContainer">
          <Grid container
                spacing={2}
                direction="row"
                justify="flex-start"
                alignItems="flex-start">
                {CardData.map(item => (
                  <Cardo width={width} image={item.image} description={item.description} expandData={item.extendData}></Cardo>
                ))}
          </Grid>
            
          
        </div>
      </main>
      
    </div>
  )
}
