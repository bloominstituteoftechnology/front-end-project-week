import React, { Component } from 'react';
import { instance } from '../../utils';

class Register extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: ''
    }
  }

  handleInput = e => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = e => {
    e.preventDefault();
    const creds = this.state;
    const endpoint = '/users/regiser';
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
        <label for='login'>Register</label>
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
          <button type='submit'>Register</button>
      </form>
    );
  }
}

export default Register;
