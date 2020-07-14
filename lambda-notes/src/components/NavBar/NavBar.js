import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import ScrollIntoView from 'react-scroll-into-view';
import {Link} from 'react-router-dom';

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#30B8BC',//'#202124',
    //marginBottom: '8%',	  
  },

  show: {
    transform: 'translateY(0)',
    transition: 'transform .5s',
  },
  hide: {
    transform: 'translateY(-110%)',
    transition: 'transform .5s',
  },
	
  appbar:{
    position:"static",
    webkitfontSmoothing: 'antialiased',
    backgroundColor: '#202124',
    boxShadow: '0 2px 4px rgba(0, 0, 0, .5)',
  },

  appbarTitle:{
    fontFamily: "Roboto mono, monospace",
    color: 'white',
    textAlign: 'left',	  
    flexGrow: 1,
    [theme.breakpoints.down('sm')]: {
      fontSize: 14,
    }
  },

  linkStyle:{
     cursor: 'pointer',	  
  },

  linkText: {
    display: 'flex',
    paddingLeft: 50,  /*paddingRight*/
    textDecoration: 'none',
    color: 'white',
    fontFamily: "Roboto mono, monospace",
    /*fontWeight: 100,*/
    /*fontSize: 14,*/
    /*textAlign: 'right',*/
    '&:hover': {
      color: 'black'
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: 12,
      padding: 2,
      marginLeft: 25,
    },
  },
});

class NavBar extends React.Component{
constructor(props) {
	super(props);
	    
	this.state = {
      		shouldShow: true,

    	};

    this.lastScroll = null;

}


componentDidMount() {
    window.addEventListener('scroll', this.handleScroll, { passive: true });
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }



render() {
  const { classes } = this.props;

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar  
	  position="fixed"
      	  color="default"
      	  className={
            `${classes.root}`
          }
	  >

        <Toolbar>
          <CssBaseline />

          <Typography className={classes.appbarTitle} variant="h6" color="inherit">
            Jottifi
          </Typography>

            <Link   style={{ textDecoration: 'none' }} to="/">
	  <Typography className={classes.linkText} variant="h8" color="inherit">
            View Notes
          </Typography>  
	  </Link>

          <Link style={{ textDecoration: 'none' }} to="/add"> 
	  <Typography className={classes.linkText} variant="h8" color="inherit">
            Create New Note
          </Typography>
	  </Link>

        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
}



NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavBar);

