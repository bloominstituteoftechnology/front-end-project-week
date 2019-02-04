import React, { Component } from "react";
import { Link } from "react-router-dom";

import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const border = {
  borderRight: "1px solid rgb(234, 237, 232)",
  paddingRight: "20px"
};

// TODO: Create logo and app name
// TODO: Add search functionality
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
          <Form
            inline
            style={{
              borderRight: "1px solid rgb(234, 237, 232)",
              paddingRight: "20px"
            }}
          >
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-primary">Search</Button>
          </Form>
          <Button variant="success" style={{ marginLeft: "20px" }}>
            Sign Up
          </Button>
        </Navbar>
      </div>
    );
  }
}
