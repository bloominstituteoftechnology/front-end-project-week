import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div className='nav'>
            <Link className="nav-button-link" to='/'> <div className="nav-button">Your Notes</div>
                </Link>
            <Link className="nav-button-link" to='/form'> <div className="nav-button">+New Note</div>
                </Link>
        </div>
    )
};

export default Nav;