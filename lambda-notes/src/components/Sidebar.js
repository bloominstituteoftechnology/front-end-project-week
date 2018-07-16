import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

const Sidebar = props => {
  return (
    <div className="sidebar-container">
      <h1>Lambda Notes</h1>
      <button><Link to="/">View Your Notes</Link></button>
      <button><Link to="/notes/add">+ Create New Note</Link></button>
    </div>
  )
}

export default Sidebar;
