import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return(
        <div>
            <h1>Lambda Notes</h1>
            <NavLink to='/'>View Your Notes</NavLink>
            <NavLink to='/'>+ Create New Note</NavLink>
        </div>
    );
};

export default NavBar