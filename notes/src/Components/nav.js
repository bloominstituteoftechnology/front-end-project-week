import React from 'react';
import { BrowserRouter, NavLink, Route, Switch, Router } from "react-router-dom";
import './nav.css'

const Nav = () => {
  <Router>
  return (
    <div className="nav_rail">
      <div className="title">
        <div>Lambda</div>
        <div>Notes</div>
      </div>
                 
      <div>
        <button className="View-Button">View Your Notes </button>
      </div>
      <div>
        <button className="New-Note-Button">
        <NavLink to="/AddNote" exact> + Create New Note </NavLink>

        </button>
      </div>
      </div>
      </Router>
}
export default Nav;