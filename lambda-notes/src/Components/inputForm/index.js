import React from 'react';
import './index.css';

const NavBar = (props) => {
    return (
        <div className='NavBar'>
            <div className='NavBar__Header'> Lambda Notes </div>
            <div className='button'>View Your Notes</div>
            <div className='button'>+Create New Note</div>

        </div>
    )
}
export default NavBar;