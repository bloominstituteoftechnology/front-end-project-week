import React from 'react';
import { Link } from 'react-router-dom';
import './SideBar.css';

export const SideBar = () => {
  return (
    <div className="Side-bar">
      <div className="Side-bar--header">Lambda Notes</div>
      <div className="Side-bar__buttons">
        <Link to="/">
          <button className="Side-bar__button">View Your Notes</button>
        </Link>
        <Link to="/new-note">
          <button className="Side-bar__button">+ Create New Note</button>
        </Link>
      </div>
    </div>
  );
};

export default SideBar;
