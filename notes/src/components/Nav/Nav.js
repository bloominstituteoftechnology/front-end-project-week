import React from 'react';
import './Nav.css';

const Nav = props => {
    return (
        <div className="nav">
            <h1>Lambda Notes</h1>
            <button className="button">View Your Notes</button>
            <button className="button">+ Create New Note</button>
        </div>
    )
};

export default Nav;