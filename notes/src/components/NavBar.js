import React from 'react';
import {NavLink} from 'react-router-dom';
import {DivNavBar, Button} from '../styles';

const NavBar = () => {
  return (
    <DivNavBar>
      <h1>
        Lambda <br />
        Notes
      </h1>
      <NavLink to="/notes">
        <Button>View Your Notes</Button>
      </NavLink>
      <NavLink to="/create">
        <Button>+ Create New Note</Button>
      </NavLink>
    </DivNavBar>
  );
};

export default NavBar;
