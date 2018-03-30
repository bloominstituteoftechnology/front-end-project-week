import React, { Component } from "react";
import { connect } from "react-redux";
import { Container, Button, Form, FormGroup, Input, Label } from "reactstrap";
import { login, resetPassword, auth } from "../utilities/auth";
import { withRouter } from "react-router-dom";
import { signIn, createUser } from "../actions";

function mapStateToProps(state) {
  return { error: state.error };
}

class Login extends Component {
  state = {
    redirect: true,
    loginError: null,
    email: "",
    password: ""
  };
  handleOnSubmit(event) {
    // event.preventDefault();
    // this.props.signIn(this.state.email, this.state.password);
    this.props.signIn("kaitlynschorr@gmail.com", "testing");

    this.props.history.push("/");
  }
  handleOnChange(event) {
    event.preventDefault();
    let copy = this.state;
    copy[event.target.name] = event.target.value;
    this.setState(copy);
  }
  handleRegister() {
    this.props.createUser(this.state.email, this.state.password);
  }

  render() {
    return (
      <Container className="mt-5">
        <h1>Login</h1>
        <Form
          onSubmit={this.handleOnSubmit.bind(this)}
          onChange={this.handleOnChange.bind(this)}
        >
          <FormGroup>
            <Label for="email">Email</Label>
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="Enter Your Email, Please"
              value={this.state.email}
            />
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input
              placeholder="Enter Password"
              type="password"
              name="password"
              id="password"
              value={this.state.password}
            />
          </FormGroup>
          <h3>{this.state.loginError}</h3>
          <Button type="submit">Log In</Button>
          <span> OR </span>
          <Button onClick={this.handleRegister.bind(this)}>
            Register New Account
          </Button>
          {this.props.error}
        </Form>
      </Container>
    );
  }
}

export default withRouter(
  connect(mapStateToProps, { signIn, createUser })(Login)
);
