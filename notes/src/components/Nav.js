import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => (
    <div className='nav'>
        <h1 className='nav-title'>Lambda Notes</h1>
        <div className='nav-links'>
            <NavLink className="nav-link" to='/'>View Your Notes</NavLink>
            <NavLink className="nav-link" to='/add'>+ Create New Note</NavLink>
        </div>
    </div>
);

export default Nav