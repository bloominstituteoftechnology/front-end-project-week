import React from 'react';
import './SideBar.css';

const SideBar = () => {
    return (
        <div className="side-bar">
            <div className="side-bar-header">Lambda Notes</div>
            <div className="side-bar-button-1">View Your Notes</div>
            <div className="side-bar-button-2">+ Create New Note</div>
        </div>
    )
}

export default SideBar;