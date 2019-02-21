import React, { Component } from "react";

import { Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

import styled from "styled-components";

const Header = styled.div`
display: flex;
flex-direction: collum;
`

export default class TopBar extends Component {
  render() {
    return (
      <Header>
        <Navbar bg="light" variant="light">
          <Navbar.Brand>
            <h1>Lambda Notes</h1>
          </Navbar.Brand>
          <Nav>
            <LinkContainer to="/">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/new-note">
              <Nav.Link>Create</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about">
              <Nav.Link>About</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar>
      </Header>
    );
  }
}