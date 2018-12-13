import React, { Component } from 'react';
import { connect } from 'react-redux';
import { registerUser } from '../actions';
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
  handleRegisterNewUser = user => {
    const redirect = () => {
      if (!this.props.error) {
        this.props.history.push('/login');
      }
    };

    this.props.registerUser(user, redirect);
  };

  render() {
    return (
      <StyledLoginView>
        <RegisterForm
          message={this.props.message}
          handleRegisterNewUser={this.handleRegisterNewUser}
        />
      </StyledLoginView>
    );
  }
}

const mapStateToProps = state => {
  return {
    error: state.auth.error,
    message: state.auth.message
  };
};

export default connect(
  mapStateToProps,
  { registerUser }
)(RegisterView);
