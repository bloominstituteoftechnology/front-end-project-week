import React, { Component } from 'react';
import { StyledLoginForm } from '../styles/StyledLoginForm';
import Button from '../styles/Button';
import { Link } from 'react-router-dom';

class RegisterForm extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      username: '',
      password: ''
    };
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onFormSubmit = e => {
    e.preventDefault();
    const { email, username, password } = this.state;
    this.props.handleRegisterNewUser({ email, username, password });
  };

  render() {
    const { email, username, password } = this.state;
    const { message } = this.props;
    return (
      <StyledLoginForm>
        <h1>
          Lambda <span>Notes</span>
        </h1>
        {message ? <div>{message}</div> : null}
        <form onSubmit={this.onFormSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              placeholder="Enter email"
              value={email}
              name="email"
              onChange={this.handleInputChange}
              id="email"
              required
            />
          </div>
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
            Already Have an account? <Link to="/login"> Login.</Link>
          </div>
          <Button>Register</Button>
        </form>
      </StyledLoginForm>
    );
  }
}

export default RegisterForm;
