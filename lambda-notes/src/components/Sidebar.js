import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

const Sidebar = props => {
  return (
    <div className="sidebar-container">
      <h1>Lambda Notes</h1>
      <button>View Your Notes</button>
      <button>+ Create New Note</button>
    </div>
  )
}

export default Sidebar;
