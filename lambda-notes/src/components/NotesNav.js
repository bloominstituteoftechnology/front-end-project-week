import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Button,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

import './NotesNav.css';

const NotesNav = () => {
  return (
    <div className="sidenav">
      <h1><b>Lambda Notes</b></h1>
      <Link to="/"><Button color="info" size="lg" block>View Your Notes</Button></Link>
      <Link to="/add"><Button color="info" size="lg" block>+ Create New Note</Button></Link>
    </div>
  );
}

export default NotesNav;