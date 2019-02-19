import React, { Component } from "react";
import { Link } from "react-router-dom";

import { Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

// TODO: Create logo and app name
// TODO: Add sign up and login functionality
export default class TopBar extends Component {
  render() {
    return (
      <div>
        <Navbar bg="light" variant="light">
          <Navbar.Brand>
            <Link to="/">Lambda Notes!</Link>
          </Navbar.Brand>
          <Nav className="mr-auto">
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
      </div>
    );
  }
}
