import React, { Component } from "react";

import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";

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
          <Navbar.Brand href="#home">Lambda Notes!</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/new-note">Create</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
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
