import React from 'react';
import "./Sidebar.css";
import { Link } from 'react-router-dom';

const Sidebar = ({props}) => (
  <div className="Sidebar">
    <h1 className="header">
      Lambda Notes
    </h1>
    <Link to="/">
      <button className="side-button">
        View Your Notes
      </button>
    </Link>
    <Link to="/new">
      <button className="side-button">
        + Create New Note
      </button>
    </Link>
  </div>
);

export default Sidebar;
