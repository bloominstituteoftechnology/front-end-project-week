import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/SideBar.css';

export const SideBar = () => {
  return (
    <div className="sideBar">
      <div className="sideBar-header">Lambda Notes</div>
      <div className="sideBar-buttons">
        <Link to="/">
          <button className="sideBar-button">View Your Notes</button>
        </Link>
        <Link to="/create-new-note">
          <button className="sideBar-button">+ Create New Note</button>
        </Link>
      </div>
    </div>
  );
};

export default SideBar;