import React, { Component } from "react";
import { Link } from "react-router-dom";

import { Navbar, Nav, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

import { InstantSearch } from "react-instantsearch-dom";
import { SignInBlockstackButton } from "blockstack-signin-btn"

import Search from "./Search";

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
          {/* <InstantSearch
            appId="RHLAQFA0BP"
            apiKey="6415e8bf55d29f2177940e02926c8848"
            indexName="getstarted_actors"
          >
            <Search />
          </InstantSearch> */}
          {/* <Button variant="success" style={{ marginLeft: "20px" }}>
            Sign Up
          </Button> */}
          {/* TODO: Update to bootstrap styling */}
          <SignInBlockstackButton
            includeBlockstackLogo={false}
            signInBtnText="Login"
            signOutBtnText="Sign Out"
            textStyle={{
              fontSize: "16px",
              color: '#fff',
            }}
            style={{
              textAlign: "center",
              backgroundColor: '#28a745',
              marginLeft: "20px",
              width: "75px",
              borderRadius: "5px",
              padding: "5px 0px 8px 0px"
            }}
            defaultStyle={{}}
          />
        </Navbar>
      </div>
    );
  }
}
