import React, { Component } from "react";
import { Col, Nav, Navbar, Button } from "reactstrap";
import { withRouter, Link } from "react-router-dom";
import "./NoteCss.css";
import axios from 'axios';
class NavBar extends Component {
  render() {
    return (
      <Nav className="navBar">
        <h1 style={{ textAlign: "left", fontFamily: "'Roboto', san-serif", fontWeight: "bold", lineHeight: "35px"}}>Lambda Notes</h1>

        <Link to="/">
          <Button
            style={{
              fontSize: "18px",
              fontWeight: "bold",
              backgroundColor: "#2BC1C4",
              color: "#FFFFFF",
             width: '200px',
              borderRadius: "0",
              padding: '8px',
            }}
          >
            View Your Notes
          </Button>
        </Link>

        <Link to="/NewNote">
          <Button
            style={{
              fontSize: "18px",
              fontWeight: "bold",
              backgroundColor: "#2BC1C4",
              color: "#FFFFFF",
             width: '200px',
              borderRadius: "0",
              padding: '8px',
            }}
          >
            Create New Note
          </Button>
        </Link>
      </Nav>
    );
  }
}

export default NavBar;
