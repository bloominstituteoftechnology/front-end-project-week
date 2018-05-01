import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { createUser } from "../actions/index";

function mapStateToProps(state) {
  return {};
}
function setErrorMsg(msg) {
  return {
    loginError: msg
  };
}

class Login extends Component {
  state = {
    redirect: true,
    loginError: null
  };
  handleOnSubmit(event) {
    event.preventDefault();
    this.props.createUser({
      username: this.state.username,
      password: this.state.password
    });
  }

  render() {
    return (
      <div>
        <h1>Register</h1>
        <Form onSubmit={this.handleOnSubmit.bind(this)}>
          <FormGroup>
            <Label for="username">Username</Label>
            <Input
              type="username"
              name="username"
              id="username"
              placeholder="Enter Your Username, Please"
              ref={username => (this.username = username)}
            />
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input
              placeholder="Enter Password"
              type="password"
              name="password"
              id="password"
              ref={password => (this.password = password)}
            />
          </FormGroup>
          <h3>{this.state.loginError}</h3>

          <Button type="submit">Submit</Button>
        </Form>
      </div>
    );
  }
}

export default connect(mapStateToProps, { createUser })(Login);
