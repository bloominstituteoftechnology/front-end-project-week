import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Menu.css';

const Menu = () => {
    return (
        <div className='menu'>
            <h1>Lambda <br></br> Notes</h1>
            <Link className='link' to='/'>
                <p className='link-btn'>View Your Notes</p>
            </Link>
            <Link className='link' to='/create-note'>
                <p className='link-btn'>+ Create New Note</p>
            </Link>
        </div>
    )
}

export default Menu;