import React from 'react';

import './SideBar.css';

class SideBar extends React.Component {
    render() {
        return (
            <div className="sidebar">
                <h1 className="sidebar-header"> Lambda Notes </h1>
                <button className="side-buttons" > View Your Notes </button>
                <button className="side-buttons" > + Create New Note </button>
            </div>
        )
    }
}

export default SideBar;