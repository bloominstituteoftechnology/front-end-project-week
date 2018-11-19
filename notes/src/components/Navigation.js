import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => (
  <div className="nav">
    <h1>Lambda Notes</h1>
    <NavLink to="/">
      <button type="button">View Your Notes</button>
    </NavLink>
    <NavLink to="/create">
      <button type="button">+ Create New Note</button>
    </NavLink>
  </div>
);

export default Navigation;
