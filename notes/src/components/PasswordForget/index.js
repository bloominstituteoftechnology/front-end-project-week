import React, { Component } from "react";
import { Link } from "react-router-dom";

import { withFirebase } from "../Firebase";
import * as ROUTES from "../../constants/routes";

import styled from "styled-components";
import { Form, Button } from "react-bootstrap";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px;
  min-width: 100vw;
  overflow: hidden;
`;

const ForgotLink = styled.div`
  padding-top: 20px;
  opacity: 0.7;
`;

const PasswordForgetPage = () => (
  <Container>
    <h2>Forgot Password?</h2>
    <PasswordForgetForm />
  </Container>
);

const INITIAL_STATE = {
  email: "",
  error: null
};

class PasswordForgetFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { email } = this.state;

    this.props.firebase
      .doPasswordReset(email)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
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
    const { email, error } = this.state;
    const isInvalid = email === "";

    return (
      <Form onSubmit={this.onSubmit}>
        <Form.Group controlId="formForgotPassword">
          <Form.Control
            name="email"
            value={this.state.email}
            onChange={this.onChange}
            type="text"
            placeholder="Email Address"
          />
        </Form.Group>
        <Button disabled={isInvalid} type="submit">
          Reset My Password
        </Button>

        {error && <p>{error.message}</p>}
      </Form>
    );
  }
}

const PasswordForgetLink = () => (
  <ForgotLink>
    <Link to={ROUTES.PASSWORD_FORGET}>Forgot Password?</Link>
  </ForgotLink>
);

export default PasswordForgetPage;

const PasswordForgetForm = withFirebase(PasswordForgetFormBase);

export { PasswordForgetForm, PasswordForgetLink };
