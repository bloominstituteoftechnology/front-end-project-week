import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Menu.css';

const Menu = () => (
  <div className="Menu">
    <h1 className="menu__header">
      Lambda
      <br />
      Notes
    </h1>
    <Link to="/">
      <p>
        <button className="menu__button">View Your Notes</button>
      </p>
    </Link>
    <Link to="/create">
      <p>
        <button className="menu__button">+ Create New Note</button>
      </p>
    </Link>
  </div>
);

export default Menu;
