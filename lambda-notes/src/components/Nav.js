import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div className='nav-container'>
            <div className="nav">
                <h1>Lambda Notes</h1>
                <div className="nav-buttons-div">
                    <Link to={'/'} className='navClick'>All notes</Link>
                    <Link to={'/create'} className='navClick'>Add a new note</Link>
                </div>
            </div>
        </div>    
    )
}

export default Nav;