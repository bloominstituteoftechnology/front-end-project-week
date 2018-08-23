import React from 'react';

import "./SideNav.css";

const SideNav = () => {
    return (
        <div className="side-container">
            <h2>Lambda Notes</h2>
            <button>View Your Notes</button>
            <button>+ Create New Note</button>
        </div>
    );
}

export default SideNav;