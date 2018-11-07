import React from 'react';
import { NavLink } from 'react-router-dom';

function Navigation(props) {
  return (
    <ul className="navbar">
      <div>
        <NavLink exact to="/" activeClassName="activeNavButton">
          Home
        </NavLink>
      </div>
      <div>
        <NavLink to="/noteform" activeClassName="activeNavButton">
          Form
        </NavLink>
      </div>
    </ul>
  )
}

export default Navigation;