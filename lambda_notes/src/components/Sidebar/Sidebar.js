import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="Sidebar">
      <h1>Lambda Notes</h1>
      <button className="Sidebar-button">
        <Link to="/">View Your Notes</Link>
      </button>
      <button className="Sidebar-button">
        <Link to="/create">+ Create New Note</Link>
      </button>
    </div>
  )
}

export default Sidebar;