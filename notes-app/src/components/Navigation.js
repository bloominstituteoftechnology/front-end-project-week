import React from 'react';
import { NavLink } from 'react-router-dom';

function Navigation(props) {
  return (
    <ul className="navbar">
      <li>
        <NavLink exact to="/" activeClassName="activeNavButton">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/noteform" activeClassName="activeNavButton">
          Form
        </NavLink>
      </li>
    </ul>
  )
}

export default Navigation;