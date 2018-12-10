import React from 'react';
import { NavLink, Link } from "react-router-dom";

const Nav = props => {
    
    return (
        <nav>
            <h1>Lambda<br/>Notes</h1>
            <NavLink to='/'>View Your Notes</NavLink>
            <NavLink to='/form'>+ Create New Note</NavLink>
        </nav>
    )
}

export default Nav;