import React from 'react';
import './index.css';

const NavBar = (props) => {
    return (
        <div className='NavBar'>
            <div className='NavBar__Header'> Lambda Notes </div>
            <div className='button' to ='/'>View Notes</div>
            <div className='button' to = '/new'>Create Notes </div>

        </div>
    )
}
export default NavBar;