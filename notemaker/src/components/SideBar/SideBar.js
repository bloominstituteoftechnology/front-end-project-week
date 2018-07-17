import React from 'react';
import './SideBar.css';

const SideBar = () => {
    return (
        <div className="side-bar">
            <div className="side-bar-header"><a href="/">Lambda Notes</a></div>
            <a className="side-bar-button" href="/">View Your Notes</a>
            <div className="spacer"></div>
            <a className="side-bar-button" href="/new">+ Create New Note</a>
        </div>
    )
}

export default SideBar;