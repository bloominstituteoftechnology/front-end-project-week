import React from 'react';
import './Nav.css';
import { NavLink } from 'react-router-dom';

const Nav = props => {
    return (
        <div className="nav">
            <h1>Lambda Notes</h1>
            <NavLink className="button" to="/">
                <div>View Your Notes</div>
            </NavLink>
            <NavLink className="button" to="/new/">
                <div>+ Create New Note</div>
            </NavLink>
        </div>
    )
};

export default Nav;