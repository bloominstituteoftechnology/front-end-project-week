import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className = "nav-bar">
            <h1 className = "nav-bar-header">
                Lambda Notes
            </h1>
            <Link to = {`/all`}>
            <button className = "nav-button"> 
                View Your Notes
            </button>
            </Link>
            <Link to={`/form`}>
            <button className = "nav-button">
                + Create New Note    
            </button>
            </Link>
         </div> 
    )
}

export default NavBar;
