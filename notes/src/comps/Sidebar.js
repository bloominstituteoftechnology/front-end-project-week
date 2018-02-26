import React from 'react';

const Sidebar = props => {
  return (
    <div className="sidebar">
      <span className="sidebar__title">Lambda Notes</span>
      <div className="sidebar__buttons">
        <button className="sidebar__buttons-view">View Your Notes</button>
        <button className="sidebar__buttons-create">+ Create New Note</button>
      </div>
    </div>
  );
};

export default Sidebar;
