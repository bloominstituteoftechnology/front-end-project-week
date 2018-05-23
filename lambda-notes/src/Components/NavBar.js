import React, { Component } from "react";
import { Col, Nav, Navbar, Button } from "reactstrap";
import { withRouter, Link } from "react-router-dom";
import './NoteCss.css'
class NavBar extends Component {
  

  render() {
  
    return (
      <Col sm="4" >
      <Navbar className="navBar">
     <Nav vertical>
    <h1>Lambda Notes</h1>
    <br />
    <br />
    <Link to="/">
    <Button>View Notes</Button>
      </Link>
    <br />
    <Link to="/NewNote">
    <Button>Create New Note</Button>
    </Link>
     </Nav>
     </Navbar>
     </Col>
    );
  }
}


export default NavBar;
