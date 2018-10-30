import React from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';

const Nav = props => {
    return (
        <div className="nav">
            <h1>Lambda Notes</h1>
            <Link className="button" to="/">
                <div>View Your Notes</div>
            </Link>
            <Link className="button" to="/new">
                <div>+ Create New Note</div>
            </Link>
        </div>
    )
};

export default Nav;