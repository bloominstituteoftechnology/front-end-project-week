import React from 'react';
import './navBar.css';
import { Link } from 'react-router-dom';

const NavBar = (props) => {
    return (
        <div className='NavBar'>
            <div className='NavBar__Header'> Lambda Notes </div>
            <Link className='button' to='/'>View Your Notes</Link>
            <Link className='button' to='/new'>+Create New Note</Link>

        </div>
    )
}
export default NavBar;