import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
    return (
        <div className="sidebar-container">
            <div className="column">
            <h1 className="title-header">Lambda Notes</h1>
            <button className="sidebar-button">View Your Notes</button>
            <button className="sidebar-button">+ Create New Note</button>
            </div>
            </div>
    );
};

export default Sidebar;