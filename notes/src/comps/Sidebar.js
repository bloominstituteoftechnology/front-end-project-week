import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Sidebar.css';

const Sidebar = props => {
  return (
    <div className="sidebar">
      <span className="sidebar__title">Lambda Notes</span>
      <div className="sidebar__buttons">
        <Link to="/" className="sidebar__button">
          <div>View Your Notes</div>
        </Link>
        <Link to="/new" className="sidebar__button">
          <div>+ Create New Note</div>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
