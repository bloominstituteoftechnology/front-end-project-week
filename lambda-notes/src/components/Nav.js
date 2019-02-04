import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div className='nav-container'>
            <div className="nav">
                <h1>Lambda Notes</h1>
                <div className="nav-buttons-div">
                    <Link to={'/'} className='navClick'>All Notes</Link>
                    <Link to={'/create'} className='navClick'>Create A Note</Link>
                </div>
            </div>
        </div>    
    )
}

export default Nav;