import React from 'react';
import { Nav, NavItem, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import SideStyles from './SideNav.css';

const SideNav = () => {
  return (
    <div className='Side-Bar'>
      <Nav>
        <h1 className='SideHead'>Lambda Notes</h1>
        <NavItem>
          <Button><Link to='/'>View Your Notes</Link></Button>
        </NavItem>
        <NavItem>
          <Button><Link to='/CreateNote'>+ Create New Note</Link></Button>
        </NavItem>
      </Nav>
    </div>
  );
};

export default SideNav;