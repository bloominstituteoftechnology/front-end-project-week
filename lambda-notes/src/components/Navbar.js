import React from "react";
import { Link } from "react-router-dom";
import { Nav, NavItem, NavLink, Button } from 'reactstrap';
import '../App.css';

const Navbar = (props) => {
    return (
        <div className= "nav-container">
            <Nav vertical className="nav-section">
            <h1>Lambda Notes</h1>
	            <NavItem>
	            	<div className="nav-button">
		            	<Link to="/" className="button-link">View Your Notes</Link>
		            	</div>
	            </NavItem>
	            <NavItem>
	             <div className="nav-button">
	            	<Link to="/NewNote" className="button-link">+ Create New Note</Link>
	            	</div>
	            </NavItem>
            </Nav>
        </div>
    );
}

export default Navbar;
