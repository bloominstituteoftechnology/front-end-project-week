import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginUser } from '../actions';
import styled from 'styled-components';
import LoginForm from '../components/LoginForm';

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
    const redirectHome = () => this.props.history.push('/');
    this.props.loginUser(user, redirectHome);
  };

  render() {
    return (
      <StyledLoginView>
        <LoginForm
          message={this.props.message}
          handleLogin={this.handleLogin}
        />
      </StyledLoginView>
    );
  }
}

const mapStateToProps = state => {
  return {
    message: state.auth.message,
    error: state.auth.error
  };
};

export default connect(
  mapStateToProps,
  { loginUser }
)(LoginView);
