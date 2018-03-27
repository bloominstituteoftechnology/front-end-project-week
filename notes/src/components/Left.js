import React from "react";
import { Link } from "react-router-dom";
import { NavItem, Nav } from "reactstrap";

const Left = () => {
  return (
    <div>
      <Nav>
        <h1>Lambda Notes</h1>
        <NavItem>
          <Link to="/">
            <h1>View Your Notes</h1>
          </Link>
        </NavItem>
        <NavItem>
          <Link to="/createnewview">
            <h1>+Create New Note</h1>
          </Link>
        </NavItem>
      </Nav>
    </div>
  );
};

export default Left;

// Link to view list of notes

// Link to create a note form
