import React from 'react';
import "./Sidebar.css";

const Sidebar = ({props}) => (
  <div className="Sidebar">
    <h1 className="header">
      Lambda Notes
    </h1>
    <button className="side-button">
      View Your Notes
    </button>
    <button className="side-button">
      + Create New Note
    </button>
  </div>
);

export default Sidebar;
