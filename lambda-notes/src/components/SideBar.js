import { NavLink } from 'react-router-dom';
import React from 'react';
import '../styles/SideBar.css';

const SideBar = () => {
  return (
      <div className="sidebar">
        <h1>Lambda <br/> Notes</h1>
       
        <ul>
          <li>
            <NavLink to="/">
              <button>View Your Notes</button>
            </NavLink>
          </li>
          <li>
            <NavLink to="/notes/new">
              <button>+ Create New Note</button>
            </NavLink>
          </li>
        </ul>
      </div>
  )
}

export default SideBar;