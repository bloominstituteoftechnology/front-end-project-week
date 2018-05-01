import React from 'react';
import { Link } from 'react-router-dom';
import { NavItem, Nav } from 'reactstrap';
import './css/SideBar.css';

const SideBar = () => {
  return (
    <div className="sideBar">
      <Nav className="sideNav">
        <h1>Lambda Notes</h1>

        <NavItem className="sideNav__ele">
          <Link to="/">
            <h1>View Your Notes</h1>
          </Link>
        </NavItem>

        <NavItem className="sideNav__ele">
          <Link to="/createnewview">
            <h1>+Create New Note</h1>
          </Link>
        </NavItem>

        <NavItem className="sideNav__ele">
          <Link to="">
            <h1>Signin</h1>
          </Link>
        </NavItem>

        <NavItem className="sideNav__ele">
          <Link to="">
            <h1>Register</h1>
          </Link>
        </NavItem>
      </Nav>
    </div>
  );
};

export default SideBar;

// Link to view list of notes

// Link to create a note form
