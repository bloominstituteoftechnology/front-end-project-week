import React from 'react';
import { Nav, NavItem } from 'reactstrap';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <div>
      <Nav className="Note-Nav">
        <h1>Lambda Notes</h1>
        <NavItem>
          <Link to='/ListView'>View Your Notes</Link>
        </NavItem>
        <NavItem>
          <Link to='/CreateNote'>+ Create New Note</Link>
        </NavItem>
      </Nav>
    </div>
  );
};

export default Navigation;