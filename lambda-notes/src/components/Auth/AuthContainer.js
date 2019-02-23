import React, { Component } from 'react';

import Login from './Login'
import Register from './Register'

class AuthContainer extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Login />
        <Register />
      </div>
    );
  }
}

export default AuthContainer;
