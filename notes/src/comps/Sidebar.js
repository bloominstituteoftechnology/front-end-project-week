import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Sidebar.css';

const Sidebar = props => {
  return (
    <div className="sidebar">
      <span className="sidebar__title">Lambda Notes</span>
      <div className="sidebar__buttons">
        <Link to="/">
          <div className="sidebar__button">View Your Notes</div>
        </Link>
        <Link to="/new">
          <div className="sidebar__button">+ Create New Note</div>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
