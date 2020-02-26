import React from 'react'
import { Link } from 'react-router-dom'
import {List, ListItem, ListItemIcon, ListItemText, ListSubheader} from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles';
import { Divider, Typography, AppBar, Toolbar, Badge } from '@material-ui/core'
import Drawer from '@material-ui/core/Drawer';
/* Icons*/
import AssignmentIcon from '@material-ui/icons/Assignment';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import MenuIcon from '@material-ui/icons/Menu';
import { Add } from '@material-ui/icons/'
import NotificationsIcon from '@material-ui/icons/Notifications'
/* Misc */ 
import classNames from 'classnames';
import { H1 } from './styled-components/SidebarStyledComponents'
import { styles } from './styled-components/SidebarStyledComponents' 

class Sidebar extends React.Component {
 constructor(props){
  super(props)

  this.state = {
   open: false,
   noteCount: this.props.notes
  }
 }

 onOpen = () => {
  this.setState({
   open: true
  })
 }

 onClose = () => {
  this.setState({
   open: false 
  })
 }
 render (){
  const { classes } = this.props
  const { noteCount } = this.state
  console.log(noteCount)
  return (
  <div>
  <AppBar
     position='absolute'
     className={classNames(classes.appBar, this.state.open && classes.appBarShift)}
     >
      <Toolbar disableGutters={!this.state.open} className={classes.toolbar}>
       <IconButton
       color="secondary"
       aria-label="Open Drawer"
       onClick={this.onOpen}
       className={
        classNames(
         classes.menuButton,
         this.state.open && classes.menuButtonHidden,
        )}
       >
        <MenuIcon />
       </IconButton>
       <Typography
       component="h1"
       variant="h6"
       color="inherit"
       noWrap
       className={classes.title}
       >
       <H1>Personote</H1>
       </Typography>
      </Toolbar>
     </AppBar>
   <Drawer
     variant="persistent"
     classes={{paper: classNames(classes.drawerPaper, this.state.open && classes.onClose)}}
     open={this.state.open}
     >
      <div className={classes.toolBarIcon}>
       <IconButton onClick={this.onClose}>
        <ChevronLeftIcon />
       <H1>Duly Noted</H1>
       </IconButton>
      </div>
      <Divider />
      <List>
   <ListItem button>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <Link to="/">
      <ListItemText primary="View Notes" />
      </Link>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <Add onClick={this.onClose}/>
      </ListItemIcon>
      <Link to="/create">

      <ListItemText primary="Add Note" />
      </Link>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <Link to="/">
      <ListItemText primary="Note Lists" />
      </Link>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <Link to="/">
      <ListItemText primary="Collaborate" />
      </Link>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Share" />
    </ListItem>
    <Divider />
    <ListSubheader inset>Settings</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Preferences" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Account" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Logout" />
    </ListItem>
      </List>
     </Drawer>
     <main className={classes.content}>
      <div className={classes.appBarSpacer} />
      <Typography component="div" className={classes.chartContainer}>

      </Typography>
     </main>
  </div>
    )}
}

export default withStyles(styles)(Sidebar)