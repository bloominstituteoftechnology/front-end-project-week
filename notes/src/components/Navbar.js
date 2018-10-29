import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = props => {
  return (
    <div>
      <NavLink to='/'>View Your Notes</NavLink>
      <NavLink to='/newnote'>+ Create New Note</NavLink>
    </div>
  )
};

export default Navbar;