import React from 'react';
import { Link } from 'react-router-dom';
import './sidebar.css';

const SideBar = props => {
  return (
    <div className="sidebar">
      <h1 className="appName">Lambda Notes</h1>

      <Link to="/">
        <div className="sidebar-buttons">View Your Notes</div>
      </Link>

      <Link to="/CreateNote">
        <div className="sidebar-buttons">+ Create New Note</div>
      </Link>

      <Link to="/Register">
        <div className="sidebar-buttons">Register</div>
      </Link>
    </div>
  );
};

export default SideBar;
