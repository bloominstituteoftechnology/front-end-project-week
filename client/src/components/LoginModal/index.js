import React, { Component } from 'react';
import Modal from '@material-ui/core/Modal';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { login, logout, createAccount, deleteAccount } from '../actions/index';
import Login from './Login/index';

const styles = {
  modal: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  paper: {
    outline: 'none',
    padding: '15px',
    minWidth: '290px',
    minHeight: '320px',
    display: 'flex',
  }
}


class LoginModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: true,
    }

    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.handleCreateAccount = this.handleCreateAccount.bind(this);

  }

  handleLogin() {
    this.props.login();
  }

  handleLogout() {
    this.props.logout();
  }

  handleCreateAccount(userName, password) {
    this.props.createAccount(userName, password);
  }

  render() {

    const { classes } = this.props;

    return (
      <Modal aria-labelledby="simple-modal-title" aria-describedby="simple-modal-description" open={this.state.open} classes={{ root: classes.modal }}>
        <Paper classes={{ root: classes.paper }}>
          <Login handleLogin={ this.handleLogin }/>
        </Paper>
       </Modal>
    );
  }
}

const mapStateToProps = state => {
  return {
    loggedIn: state.loggedIn,
    userName: state.username,
    password: state.password,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    login: () => {
      dispatch(login());
    },
    logout: () => {
      dispatch(logout());
    },
    createAccount: (userName, password) => {
      dispatch(createAccount(userName, password));
    },
    deleteAccount: () => {
      dispatch(deleteAccount);
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(LoginModal));
