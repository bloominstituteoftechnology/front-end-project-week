import React, { Component } from 'react';
import { StyledLoginForm } from '../styles/StyledLoginForm';
import Button from '../styles/Button';
import { Link } from 'react-router-dom';

class LoginForm extends Component {
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

  onFormSubmit = e => {
    e.preventDefault();
    this.props.handleLogin({
      username: this.state.username,
      password: this.state.password
    });
    this.setState({ username: '', password: '' });
  };

  render() {
    const { username, password } = this.state;
    const { message } = this.props;
    return (
      <StyledLoginForm>
        <h1>
          Lambda <span>Notes</span>
        </h1>
        {message ? <div>{message}</div> : null}
        <form onSubmit={this.onFormSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              placeholder="Enter username"
              value={username}
              name="username"
              onChange={this.handleInputChange}
              id="username"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              name="password"
              onChange={this.handleInputChange}
              id="password"
              required
            />
          </div>
          <div className="redirect-div">
            Don't Have an account? <Link to="/register"> Register Here.</Link>
          </div>
          <Button>Log in</Button>
        </form>
      </StyledLoginForm>
    );
  }
}

export default LoginForm;
