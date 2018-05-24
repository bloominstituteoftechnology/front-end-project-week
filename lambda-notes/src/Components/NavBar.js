import React, { Component } from "react";
import { Col, Nav, Navbar, Button } from "reactstrap";
import { withRouter, Link } from "react-router-dom";
import './NoteCss.css'
class NavBar extends Component {
  

  render() {
  
    return (
      
      
     <Nav className="navBar">
    <h1>Lambda Notes</h1>
 
    <Link to="/">
    <Button>View Notes</Button>
      </Link>
    
    <Link to="/NewNote">
    <Button>Create New Note</Button>
    </Link>
     </Nav>
     
     
    );
  }
}


export default NavBar;
