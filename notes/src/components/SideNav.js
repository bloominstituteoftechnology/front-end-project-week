import React from 'react';
import { NavLink } from 'react-router-dom';

const SideNav = () => (
    <div className='side-nav'>
        <h1 className='nav-title'>Lambda<br/>Notes</h1>
        <NavLink className="nav-link" to='/'>View Your Notes</NavLink>
        <NavLink className="nav-link" to='/add'>+ Create New Note</NavLink>
    </div>
);

export default SideNav