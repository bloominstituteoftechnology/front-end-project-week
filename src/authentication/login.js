import React, { Component } from "react";
import { Form, Input, FormGroup, Button } from "reactstrap";
import "./login.css";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      usernameInput: "",
      passwordInput: ""
    };
  }
  componentDidMount() {}

  userHandler = e => {
    console.log(e);
    this.setState({ usernameInput: e.target.value });
  };
  passwordHandler = e => {
    console.log(e);
    this.setState({ passwordInput: e.target.value });
  };
  loginSubmit = e => {
    e.preventDefault();
    const username = this.state.usernameInput;
    localStorage.setItem("user", username);
    const password = this.state.passwordInput;
    localStorage.setItem("password", password);
    window.location.reload();
  };

  render() {
    return (
      <div className="background">
        <h1 className="title">Welcome to LambdaNotes Login Page</h1>
        <Form className="login" onSubmit={this.loginSubmit}>
          <FormGroup>
            <Input
              className="username"
              type="text"
              onChange={this.userHandler}
              placeholder="Username"
              value={this.state.usernameInput}
            />
          </FormGroup>
          <FormGroup>
            <Input
              className="password"
              type="text"
              onChange={this.passwordHandler}
              placeholder="Password"
              value={this.state.passwordInput}
            />
          </FormGroup>
          <Button onClick={this.loginSubmit}>Login</Button>
        </Form>
      </div>
    );
  }
}

export default Login;
