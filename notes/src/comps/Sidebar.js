import React from 'react';
import '../styles/Sidebar.css';

const Sidebar = props => {
  return (
    <div className="sidebar">
      <span className="sidebar__title">Lambda Notes</span>
      <div className="sidebar__buttons">
        <button className="sidebar__button">View Your Notes</button>
        <button className="sidebar__button">+ Create New Note</button>
      </div>
    </div>
  );
};

export default Sidebar;
