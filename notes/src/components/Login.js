import React, { Component } from "react";
import {
  LoginInput,
  StyledForm,
  SpinnerWrapper,
  LoginWrapper,
  LoginButton,
  LoginHeader
} from "../styles";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }
  handleChange = event =>
    this.setState({ [event.target.name]: event.target.value });
  handleSubmit = event => {
    event.preventDefault();
    localStorage.setItem("username", this.state.username);
    window.location.reload();
  };
  render() {
    return (
      <SpinnerWrapper>
        <LoginWrapper>
          <StyledForm>
            <LoginHeader>Lambda Notes</LoginHeader>
            <LoginInput
              type="text"
              name="username"
              placeholder="username"
              onChange={this.handleChange}
              value={this.state.username}
            />
            <LoginInput
              type="password"
              name="password"
              placeholder="password"
              onChange={this.handleChange}
              value={this.state.password}
            />
            <LoginButton
              onClick={this.handleSubmit}
              onSubmit={this.handleSubmit}
            >
              Log In
            </LoginButton>
          </StyledForm>
        </LoginWrapper>
      </SpinnerWrapper>
    );
  }
}

export default Login;
