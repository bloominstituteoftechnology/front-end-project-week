import React, { Component } from 'react';
import { connect } from 'react-redux';

class Login extends Component {
  render() {
    return (
      <div>
        SignUp/SignIn form here
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    activeUser: activeUser,
  };
};

export default connect(mapStateToProps)(Login);