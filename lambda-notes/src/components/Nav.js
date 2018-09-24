import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div className="nav">
            <h6>Watcha wanna do?</h6>
            <Link to={'/'} className='navClick'>All notes</Link>
            <Link to={'/create'} className='navClick'>Add a new note</Link>
        </div>
    )
}

export default Nav;