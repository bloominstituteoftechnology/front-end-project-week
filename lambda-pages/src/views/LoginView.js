import React, { Component } from 'react';
import LoginForm from '../components/LoginForm';
import styled from 'styled-components';
import axios from 'axios';

const StyledLoginView = styled.div`
  display: flex;
  height: 100vh;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
`;

class LoginView extends Component {
  state = {
    message: ''
  };

  handleLogin = user => {
    axios
      .post('http://localhost:5000/api/auth/login', user)
      .then(res => {
        localStorage.setItem('auth_token', res.data.token);
        this.props.history.push('/');
      })
      .catch(err => {
        this.setState({ message: err.response.data.message });
      });
  };

  render() {
    return (
      <StyledLoginView>
        <LoginForm handleLogin={this.handleLogin} />
      </StyledLoginView>
    );
  }
}

export default LoginView;
