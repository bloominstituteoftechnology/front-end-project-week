import React, { Component } from "react";
import { Link } from "react-router-dom";
import { AuthUserContext } from "../Session";
import logo from "./logo.svg";

import { Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import styled from "styled-components";

import SignOutButton from "../SignOut";

import * as ROUTES from "../../constants/routes";

const Image = styled.img`
  height: 50px;
  width: auto;
`;

const TopBar = () => (
  <AuthUserContext.Consumer>
    {authUser => (authUser ? <TopBarAuth /> : <TopBarPublic />)}
  </AuthUserContext.Consumer>
);

const TopBarAuth = () => (
  <Navbar bg="light" variant="light">
    <Navbar.Brand>
      <Link to={ROUTES.HOME}>
        <Image src={logo} />
      </Link>
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
    </Nav>
    <Nav>
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
      <Link to={ROUTES.LANDING}>
        <Image src={logo} />
      </Link>
    </Navbar.Brand>
    <Nav className="mr-auto">
      <LinkContainer to={ROUTES.LANDING}>
        <Nav.Link>Home</Nav.Link>
      </LinkContainer>
      <LinkContainer to={ROUTES.ABOUT}>
        <Nav.Link>About</Nav.Link>
      </LinkContainer>
    </Nav>
    <Nav>
      <LinkContainer to={ROUTES.SIGN_IN}>
        <Nav.Link>Sign In</Nav.Link>
      </LinkContainer>
    </Nav>
  </Navbar>
);

export default TopBar;
