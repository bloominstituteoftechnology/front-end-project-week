import React from 'react';
import { NavLink } from 'react-router-dom';
import './Components.css';

const SideBar = () => {
    const handleLogoutSubmit = props => {
        window.localStorage.removeItem('secret_token');
        window.location.reload();
      };

    return (
        <div className="sidebar-container">
        <h1>
            Lambda <br /> Notes
        </h1>
        <NavLink to='/'>View Your Notes</NavLink>
        <NavLink to='/createnote'>+ Create New Note</NavLink>
        <button onClick={handleLogoutSubmit}>
            Log Out
        </button>
    </div>
    )
    
    }

export default SideBar;