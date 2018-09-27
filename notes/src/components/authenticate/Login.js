import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { logIn } from '../../actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
    };
  }

  componentDidMount() {
    console.log('CDM Login.js', this.props.isLoggedIn);
    // this.props.handleLoggedIn(this.props.isLoggedIn);
    // if (this.props.isLoggedIn) {
    //   this.props.handleLoggedIn(true);
    // } else {
    //   this.props.handleLoggedIn(false);
    // }
  }

  componentDidUpdate(prevProps) {
    if (this.props.isLoggedIn !== prevProps.isLoggedIn) {
      this.props.handleLoggedIn(this.props.isLoggedIn);
    }
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  login = (event) => {
    event.preventDefault();
    console.log('login test');
    this.props.logIn(this.state.username, this.state.password);
    this.props.handleLoggedIn(this.props.isLoggedIn);
  };

  render() {
    return (
      <React.Fragment>
        <Container>
          <Logo>Lambda Notes</Logo>
          <StyledForm>
            <StyledInput
              placeholder="Username"
              name="username"
              onChange={this.handleChange}
            />
            <StyledInput
              placeholder="Password"
              name="password"
              onChange={this.handleChange}
              type="password"
            />
            <StyledButton onClick={this.login}>Login</StyledButton>
            <StyledButton>Sign-up</StyledButton>
          </StyledForm>
        </Container>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  // console.log('auth mapStateToProps', state);
  return {
    isLoggedIn: state.authReducer.isLoggedIn,
    user: state.notesReducer.user,
  };
};

export default connect(
  mapStateToProps,
  { logIn }
)(Login);

const Container = styled.div`
  display: flex;
  flex-direction: column;
  // justify-content: center;
  align-items: center;
  margin-top: 200px;
`;

const Logo = styled.h1`
  font-size: 3rem;
`;

const StyledForm = styled.form`
  display: flex;
  // flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  // align-items: center;
  width: 10%;
`;

const StyledInput = styled.input`
  width: 100%;
`;

const StyledButton = styled.button``;
