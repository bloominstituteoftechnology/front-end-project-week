import React from "react";

import { PasswordForgetForm } from "../PasswordForget";
import PasswordChangeForm from "../PasswordChange";
import { withAuthorization, AuthUserContext } from "../Session";

import { Form } from "react-bootstrap";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: column;
  padding: 20px;
  min-width: 100vw;
  overflow: hidden;
`;

const Forms = styled.div`
  display: flex;
  flex-direction: row;
  margin: 10px;
`;

const AccountPage = () => {
  return (
    <AuthUserContext.Consumer>
      {authUser => (
        <Container>
          <h2>Account: {authUser.email}</h2>
          <Forms>
            <PasswordForgetForm />
            <PasswordChangeForm />
          </Forms>
        </Container>
      )}
    </AuthUserContext.Consumer>
  );
};

const condition = authUser => !!authUser;

export default withAuthorization(condition)(AccountPage);
