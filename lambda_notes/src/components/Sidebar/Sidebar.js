import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="Sidebar-container">
      <div className="Sidebar">
        <h1>Lambda Notes</h1>
        <div className="Sidebar-buttons">
          <button className="Sidebar-button">
            <Link to="/">View Your Notes</Link>
          </button>
          <button className="Sidebar-button">
            <Link to="/create">+ Create New Note</Link>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Sidebar;