import React, { Component } from "react";
import { Link } from "react-router-dom";
import { AuthUserContext } from "../Session";

import { Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

import SignOutButton from "../SignOut";

import * as ROUTES from "../../constants/routes";

// TODO: Create logo and app name
// TODO: Add sign up and login functionality
const TopBar = () => (
  <AuthUserContext.Consumer>
    {authUser => (authUser ? <TopBarAuth /> : <TopBarPublic />)}
  </AuthUserContext.Consumer>
);

const TopBarAuth = () => (
  <Navbar bg="light" variant="light">
    <Navbar.Brand>
      <Link to={ROUTES.HOME}>Lambda Notes!</Link>
    </Navbar.Brand>
    <Nav className="mr-auto">
      <LinkContainer to={ROUTES.HOME}>
        <Nav.Link>Home</Nav.Link>
      </LinkContainer>
      <LinkContainer to={ROUTES.NEW_NOTE}>
        <Nav.Link>Create</Nav.Link>
      </LinkContainer>
      <LinkContainer to={ROUTES.ABOUT}>
        <Nav.Link>About</Nav.Link>
      </LinkContainer>
      <LinkContainer to={ROUTES.ACCOUNT}>
        <Nav.Link>Account</Nav.Link>
      </LinkContainer>
      <SignOutButton />
    </Nav>
  </Navbar>
);

const TopBarPublic = () => (
  <Navbar bg="light" variant="light">
    <Navbar.Brand>
      <Link to={ROUTES.LANDING}>Lambda Notes!</Link>
    </Navbar.Brand>
    <Nav className="mr-auto">
      <LinkContainer to={ROUTES.LANDING}>
        <Nav.Link>Home</Nav.Link>
      </LinkContainer>
      <LinkContainer to={ROUTES.ABOUT}>
        <Nav.Link>About</Nav.Link>
      </LinkContainer>
      <LinkContainer to={ROUTES.SIGN_IN}>
        <Nav.Link>Sign In</Nav.Link>
      </LinkContainer>
    </Nav>
  </Navbar>
);

export default TopBar;
