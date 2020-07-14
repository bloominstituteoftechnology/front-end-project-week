import React from "react";
import { Link } from "react-router-dom";
import { Nav, NavItem, NavLink, Button } from 'reactstrap';
import '../App.css';
import logo from './lambda-logo.png';

const Navbar = (props) => {
    return (
        <div className= "nav-container">
            <Nav vertical className="nav-section">
						<div>
            	<Link to ='/'><img className="logo-img" src={logo} /></Link>
            </div>
            <h1>Lambda Notes</h1>
	            <NavItem>
	            	<div className="nav-button">
		            	<Link to="/notes" className="button-link">View Your Notes</Link>
		            	</div>
	            </NavItem>
	            <NavItem>
	             <div className="nav-button">
	            	<Link to="/NewNote" className="button-link">+ Create New Note</Link>
	            	</div>
	            	<div className="nav-button">
	            	<Link to="/" className="button-link">Log Out</Link>
	            	</div>
	            </NavItem>
            </Nav>
        </div>
    );
}

export default Navbar;
