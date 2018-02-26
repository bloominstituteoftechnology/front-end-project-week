import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="Sidebar">
      <h1>Lambda Notes</h1>
      <Link to="/">
        <button className="Sidebar-button">View Your Notes</button>
      </Link>
      <Link to="/create">
        <button className="Sidebar-button">+ Create New Note</button>
      </Link>
    </div>
  )
}

export default Sidebar;