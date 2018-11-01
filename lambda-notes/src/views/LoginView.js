import React, { Component } from 'react';
import LoginForm from '../components/LoginForm';
import styled from 'styled-components';

const StyledLoginView = styled.div`
  display: flex;
  height: 100vh;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
`;

class LoginView extends Component {
  handleLoginRedirect = () => {
    this.props.history.push('/');
  };

  render() {
    return (
      <StyledLoginView>
        <LoginForm handleLoginRedirect={this.handleLoginRedirect} />
      </StyledLoginView>
    );
  }
}

export default LoginView;
