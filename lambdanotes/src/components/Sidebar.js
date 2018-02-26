import React from 'react';
import './Sidebar.css';

const Sidebar = props => {
  return (
    <div className="Sidebar">
      <h1>Lambda Notes</h1>
      <button>View Your Notes</button>
      <button>+ Create New Note</button>
    </div>
  )
}

export default Sidebar;
