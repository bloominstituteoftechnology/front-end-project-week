import React from 'react';
import './SideBar.css';


const SideBar = () => {
    return (
        <div className="sidebar">
            <h1 className="title">Lambda Notes</h1>
            <button className="side-button">View Your Notes</button>
            <button className="side-button">+ Create New Note</button>
        </div>
    );
};

export default SideBar;