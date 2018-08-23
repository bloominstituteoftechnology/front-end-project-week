import React, { Component } from "react";
import { Form, Input, FormGroup, Button } from "reactstrap";
import "./auth.css";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usernameInput: "",
      passwordInput: ""
    };
  }
  editRegisterHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  registerSubmit = e => {
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
        <Form className="register" onSubmit={this.registerSubmit}>
          <FormGroup>
            <Input
              className="username"
              name="usernameInput"
              type="text"
              onChange={this.editRegisterHandler}
              placeholder="Username"
              value={this.state.usernameInput}
            />
          </FormGroup>
          <FormGroup>
            <Input
              className="password"
              name="passwordInput"
              type="text"
              onChange={this.editRegisterHandler}
              placeholder="Password"
              value={this.state.passwordInput}
            />
          </FormGroup>
          <Button onClick={this.registerSubmit}>Register</Button>
        </Form>
      </div>
    );
  }
}

export default Register;
