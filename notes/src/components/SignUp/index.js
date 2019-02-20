import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { withFirebase } from "../Firebase";
import { compose } from "recompose";

import * as ROUTES from "../../constants/routes";

import styled from "styled-components";
import { Form, Button } from "react-bootstrap";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: column;
  padding: 20px;
  min-width: 100vw;
  overflow: hidden;
`;

const SignUp = styled.div`
  padding-top: 10px;
  opacity: 0.7;
`;

const SignUpPage = () => (
  <Container>
    <h2>Sign Up</h2>
    <SignUpForm />
  </Container>
);

const SignUpLink = () => (
  <SignUp>
    Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>{" "}
  </SignUp>
);

const INITIAL_STATE = {
  username: "",
  email: "",
  passwordOne: "",
  passwordTwo: "",
  error: null
};

class SignUpFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { username, email, passwordOne } = this.state;

    this.props.firebase
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.HOME);
      })
      .catch(error => {
        this.setState({ error });
      });

    event.preventDefault();
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { username, email, passwordOne, passwordTwo, error } = this.state;
    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === "" ||
      email === "" ||
      username === "";

    return (
      <div>
        <Form onSubmit={this.onSubmit}>
          <Form.Group controlId="formSignUpUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control
              name="username"
              value={username}
              onChange={this.onChange}
              type="text"
              placeholder="Full Name"
            />
          </Form.Group>
          <Form.Group controlId="formSignUpEmail">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              name="email"
              value={email}
              onChange={this.onChange}
              type="text"
              placeholder="Email Address"
            />
          </Form.Group>
          <Form.Group controlId="formSignUpPasswordOne">
            <Form.Label>Password</Form.Label>
            <Form.Control
              name="passwordOne"
              value={passwordOne}
              onChange={this.onChange}
              type="password"
              placeholder="Password"
            />
          </Form.Group>
          <Form.Group controlId="formSignUpPasswordTwo">
            <Form.Label>Confirm password</Form.Label>
            <Form.Control
              name="passwordTwo"
              value={passwordTwo}
              onChange={this.onChange}
              type="password"
              placeholder="Confirm Password"
            />
          </Form.Group>
          <Button disabled={isInvalid} type="submit">
            Sign Up
          </Button>

          {error && <p>{error.message}</p>}
        </Form>
      </div>
    );
  }
}

const SignUpForm = compose(
  withRouter,
  withFirebase
)(SignUpFormBase);

export default SignUpPage;

export { SignUpForm, SignUpLink };
