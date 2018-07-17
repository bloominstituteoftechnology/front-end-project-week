import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Menu.css';

const Menu = () => {
    return (
        <div className='menu'>
            <h1>Lambda <br></br> Notes</h1>
            <Link to='/'>
                <p>View Your Notes</p>
            </Link>
            <Link to='/create-note'>
                <p>+ Create New Note</p>
            </Link>
        </div>
    )
}

export default Menu;