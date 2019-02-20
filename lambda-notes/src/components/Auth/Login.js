import React, { Component } from 'react';

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

  onSubmit = (e) => {
    
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
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
          <button type='submit' onClick={this.onSubmit}>Login</button>
      </form>
    );
  }
}

export default Login;
