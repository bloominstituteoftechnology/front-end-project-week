import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = props => {
  return (
    <div className="Sidebar">
        <h1 className="Sidebar-Title">Lambda Notes</h1>
        <Link to={"/"}><button type="button">View Your Notes</button></Link>
        <Link to={"/create"}><button type="button">+ Create New Note</button></Link>
    </div>
  );
}

export default Sidebar;
