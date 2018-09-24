import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <div className="menu">
      <h1>Lambda Notes</h1>
      <Link className="link" to="/">
        View Your Notes
      </Link>
      <Link className="link" to="/newnote">
        Create New Note
      </Link>
    </div>
  );
};

export default Menu;
