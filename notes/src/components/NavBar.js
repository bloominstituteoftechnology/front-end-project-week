import React from 'react';

const NavBar = () => {
    return (
        <div className = "nav-bar">
            <h1 className = "nav-bar-header">
                Lambda Notes
            </h1>
            <button className = "nav-button"> 
                View Your Notes
            </button>
            <button className = "nav-button">
                + Create New Note
            </button>

        </div> 
    )
}

export default NavBar;