import React, { Component } from 'react';
import { instance } from '../../utils';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: ''
    }
  }

  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const creds = this.state;
    const endpoint = '/users/login';
    instance.post(endpoint, creds)
      .then(res => {
        localStorage.setItem('jwt', res.data.token);
      })
      .catch(err => {
        console.log('error', err);
      });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label for='login'>Login</label>
        <input
          type='text'
          name='username'
          placeholder='username'
          value={this.state.username}
          onChange={this.handleInput} />
          <input
            type='text'
            name='password'
            placeholder='password'
            value={this.state.password}
            onChange={this.handleInput} />
          <button type='submit'>Login</button>
      </form>
    );
  }
}

export default Login;
