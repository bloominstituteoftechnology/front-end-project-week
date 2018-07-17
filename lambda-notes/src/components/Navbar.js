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
		            <Button color="secondary">
		            	<Link to="/">View Your Notes</Link>
		            </Button>
	            </NavItem>
	            <NavItem>
	              <Button color="secondary">
	            	<Link to="/NewNote">+ Create New Note</Link>
	            	</Button>
	            </NavItem>
            </Nav>
        </div>
    );
}

export default Navbar;
