import React from 'react';
import { connect } from 'react-redux';

import { login, checkLogin } from '../store/actions';

import LoginForm from '../components/Login/LoginForm'

class LoginView extends React.Component {
  componentDidMount() {
    this.props.checkLogin();
  }

  render () {
    return (
      <LoginForm {...this.props}/>
    );
  }
}

export default connect(
  state => ({
    loggedIn: state.loggedIn,
    loginSuccess: state.loginSuccess,
  }),
  { login, checkLogin }
)(LoginView);