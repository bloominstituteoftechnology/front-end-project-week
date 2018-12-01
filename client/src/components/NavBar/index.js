import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Note from '@material-ui/icons/Note';
import NoteAdd from '@material-ui/icons/NoteAdd';
import MoreVert from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';
import Search from './Search/index';
import Tooltip from '@material-ui/core/Tooltip';
import InputLabel from '@material-ui/core/InputLabel';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { connect } from 'react-redux';
import { resetNewNote } from '../AddNote/actions/index';
import { resetEditNote } from '../EditNote/actions/index';
import { logout, deleteAccount } from '../actions/index';

const styles = theme => ({
  root: {
    // backgroundColor: '#1e88e5',
  },
  toolbarRoot: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  title: {
    color: 'white',

  },
  icon: {
    color: 'white',
  },
  iconButton: {
    marginLeft: '15px'
  },
  tools: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  }
});

class NavBar extends Component {

  constructor(props) {
    super(props);

    this.state = {
      anchorEl: null,
    }

    this.handleMenuClick = this.handleMenuClick.bind(this);
    this.handleMenuClose = this.handleMenuClose.bind(this);
    this.handleMyAccount = this.handleMyAccount.bind(this);
    this.handleDeleteAccount = this.handleDeleteAccount.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleMenuClick(e) {
    this.setState({ anchorEl: e.currentTarget });
  }

  handleMenuClose() {
    this.setState({ anchorEl: null });
  };

  handleMyAccount() {
    this.setState({ anchorEl: null });
  }

  handleDeleteAccount() {
    this.setState({ anchorEl: null });
    this.props.deleteAccount();
  }

  handleLogout() {
    this.setState({ anchorEl: null });
    this.props.logout();
  }

  render() {

    const { classes } = this.props;

    const reset = () => {
      this.props.resetNewNote();
      this.props.resetEditNote();
    }

    return (
        <AppBar classes={{ root: classes.root }}>
          <Toolbar classes={{root: classes.toolbarRoot}}>
            <Typography variant='title' classes={{title: classes.title}}>
              Lambda Notes
            </Typography>

            <div className={ classes.tools }>
              <Search />

              <Link to='/Notes/All'>
                <Tooltip title='View Notes'>

                  <IconButton onClick={reset} aria-label='View-Notes' classes={{root: classes.iconButton}}>
                    <Note className={ classes.icon } />
                  </IconButton>
                </Tooltip>
              </Link>

              <Link to='/Notes/New'>
                <Tooltip title='Add Note'>
                  <IconButton onClick={() => this.props.resetNewNote() } aria-label='Add Note' classes={{root: classes.iconButton}}>
                    <NoteAdd className={ classes.icon } />
                  </IconButton>
                </Tooltip>
              </Link>

              <Tooltip title='More'>
                <IconButton aria-owns={ this.state.anchorEl ? 'simple-menu' : undefined } aria-label='Add Note' aria-haspopup="true" classes={{root: classes.iconButton}} onClick={this.handleMenuClick}>
                  <MoreVert className={ classes.icon } />
                </IconButton>
              </Tooltip>
              <Menu id="simple-menu" anchorEl={this.state.anchorEl} open={Boolean(this.state.anchorEl)} onClose={this.handleMenuClose}>
                <MenuItem onClick={this.handleMyAccount}>My Account</MenuItem>
                <MenuItem onClick={this.handleDeleteAccount}>Delete Account</MenuItem>
                <MenuItem onClick={this.handleLogout}>Logout</MenuItem>
              </Menu>
            </div>
          </Toolbar>
        </AppBar>
    );
  }
}

const mapStateToProps = state => {
  return {
    userName: state.user.userName,
    password: state.user.password,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    resetNewNote: () => {
      dispatch(resetNewNote());
    },
    resetEditNote: () => {
      dispatch(resetEditNote());
    },
    logout: () => {
      dispatch(logout());
    },
    deleteAccount: () => {
      dispatch(deleteAccount());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(NavBar));
