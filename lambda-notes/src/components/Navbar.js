import React, { Component } from "react";
import { Route} from "react-router-dom";
import { Nav, NavItem, NavLink, Button } from 'reactstrap';
import '../App.css';

const Navbar = (props) => {
    return (
        <div className= "nav-container">
            <Nav vertical className="nav-section">
            <h1>Lambda Notes</h1>
	            <NavItem>
		            <Button color="secondary">
		            	<NavLink to="/">View Your Notes</NavLink>
		            </Button>
	            </NavItem>
	            <NavItem>
	              <Button color="secondary">
	            	<NavLink to="/NewNote">+ Create New Note</NavLink>
	            	</Button>
	            </NavItem>
            </Nav>
        </div>
    );
}

export default Navbar;
