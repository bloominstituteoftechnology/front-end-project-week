import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <nav className="Sidebar-container">
      <div className="Sidebar">
        <h1>Lambda Notes</h1>
        <div className="Sidebar-buttons">
        <Link to="/">
          <button className="Sidebar-button" >
            View Your Notes
          </button>
        </Link>
        <Link to="/create">
          <button className="Sidebar-button">
              + Create New Note
          </button>
        </Link>
        </div>
      </div>
    </nav>
  )
}

export default Sidebar;