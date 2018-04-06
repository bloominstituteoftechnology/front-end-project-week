import React, { Component } from 'react';
import { login } from '../../utils/AuthService';

export default class Signup extends Component {
  render() {
    return (
      <div> Please log in...
      {login()}
      </div>
    );
  }
}
