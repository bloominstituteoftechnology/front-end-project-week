import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => (
  <div className="Menu">
    <h1 className="menu__title">Lambda Notes</h1>
    <Link to="/">
      <button className="menu__button">View Your Notes</button>
    </Link>
    <Link to="/create">
      <button className="menu__button">+ Create New Note</button>
    </Link>
  </div>
);

export default Menu;
