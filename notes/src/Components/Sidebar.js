import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
    return (
        <div className="sidebar-container">
            <div className="column">
            <h3><strong>Lambda Notes</strong></h3>
            <button className="sidebar-button">View Your Notes</button>
            <button className="sidebar-button">+ Create New Note</button>
            </div>
            </div>
    );
};

export default Sidebar;