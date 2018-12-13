import React, { Component } from 'react';


class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: ''
    };
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleLoginSubmit = () => {
    const user = this.state.username;
    const pass = this.state.password;
    localStorage.setItem('login-username', JSON.stringify(user));
    localStorage.setItem('login-password', JSON.stringify(pass));
  };

  render() {
    return (
      <form className="login-form">
        <h3>Please Login to Lambda Note's App</h3>
          <input
            type="text"
            placeholder="User Name"
            name="username"
            value={this.state.username}
            onChange={this.handleInputChange}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={this.state.password}
            onChange={this.handleInputChange}
          />
          <button className="login-btn" onClick={this.handleLoginSubmit}>
            Log In
          </button>
      </form>
    );
  }
}

export default Login;
