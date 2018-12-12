import React, { Component } from 'react';
import styled from 'styled-components';
import RegisterForm from '../components/RegisterForm';

const StyledLoginView = styled.div`
  display: flex;
  height: 100vh;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
`;

class RegisterView extends Component {
  handleLoginRedirect = () => {
    this.props.history.push('/');
  };

  render() {
    return (
      <StyledLoginView>
        <RegisterForm handleLoginRedirect={this.handleLoginRedirect} />
      </StyledLoginView>
    );
  }
}

export default RegisterView;
