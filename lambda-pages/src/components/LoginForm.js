import React, { Component } from 'react';
import styled from 'styled-components';
import Button from '../styles/Button';

const StyledLoginForm = styled.div`
  display: flex;
  flex-wrap: wrap;
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 3px 6px -3px rgba(0, 0, 0, 0.7);
  padding: 2rem;
  width: 80%;
  margin: 0 auto;
  form {
    width: 100%;
  }
  input,
  h1 {
    width: 100%;
    margin-bottom: 2rem;
  }
  h1 {
    text-align: center;
    text-transform: uppercase;
    font-size: 2rem;
    margin-bottom: 2rem;
  }

  input {
    padding: 1rem;
    font-size: inherit;
    border-radius: 5px;
    border: 1px solid #dcdde1;
  }

  button {
    margin-top: 2rem;
  }
`;

class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: ''
    };
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onFormSubmit = e => {
    e.preventDefault();
    // console.log('sumbit');
    this.props.handleLoginRedirect();
  };

  render() {
    const { email, password } = this.state;
    return (
      <StyledLoginForm>
        <h1>Lambda Notes</h1>
        <form onSubmit={this.onFormSubmit}>
          <input
            type="text"
            placeholder="Enter email"
            value={email}
            name="email"
            onChange={this.handleInputChange}
            required
          />
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            name="password"
            onChange={this.handleInputChange}
            required
          />
          <Button>Log in</Button>
        </form>
      </StyledLoginForm>
    );
  }
}

export default LoginForm;

// A