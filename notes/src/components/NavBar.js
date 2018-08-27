import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'

const NavBar = (props) => {
    console.log('logging props in navbar', props)
    return (
        <div className = "nav-bar">
            <h1 className = "nav-bar-header">
                Lambda Notes
            </h1>
            <Link to = {"/notes"}>
            <button className = "nav-button"> 
                View All Notes
            </button>
            </Link>
            <Link to={`/form`}>
            <button className = "nav-button">
                + Create New Note    
            </button>
            </Link>
            <Link to={'/'}>
            <button className = "nav-button">
                Main Page    
            </button>
            </Link>

         </div> 
    )
}

export default NavBar;
