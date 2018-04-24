import React from 'react';
import { Nav, NavItem } from 'reactstrap';
import { Link } from 'react-router-dom';


const Navigation = () => {
  return (
    <div>
      <Nav className="Nav">

        <h1>Am I doing this right?</h1>

        <NavItem>
          <Link to="/ListView" className="Nav-link">List View</Link>
        </NavItem>
        <NavItem>
          <Link to="/CreateNew" className="Nav-link">Create New Note</Link>
        </NavItem>
       
      </Nav>
    </div>
  );
};



export default Navigation;