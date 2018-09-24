import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <div className="menu">
      <h1>Lambda Notes</h1>
      <Link className="menu-link" to="/">
        View Your Notes
      </Link>
      <Link className="menu-link" to="/newnote">
        Create New Note
      </Link>
    </div>
  );
};

export default Menu;
