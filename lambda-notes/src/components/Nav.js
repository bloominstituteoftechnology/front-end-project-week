import React from 'react';
import { Link } from 'react-router-dom';


const Nav = () => {
    return (
        <div className='nav'>
            <h1>Lambda Notes</h1>
            <Link to={`/`}> <div className="nav-button"> View Your Notes</div>
            </Link>
            <Link to={`/form`}> <div className="nav-button"> +Create New Note</div>
            </Link>
        </div>
    )
};

export default Nav;