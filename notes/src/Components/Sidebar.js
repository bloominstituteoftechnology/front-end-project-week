import React from 'react';
import { Link } from 'react-router-dom';
// import Search from './Search';
import './Sidebar.css';

const Sidebar = () => {
    return (
        <div className="sidebar-container">
            <div className="column">
            <h1 className="title-header">Lambda Notes</h1>
            <Link to="/" className="sidebar-button">View Your Notes</Link>
            <Link to="/notes/NewNote" className="sidebar-button">+ Create New Note</Link>
            </div>
            </div>
    );
};

export default Sidebar;