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
            <p>+ Create New Note</p>
        </div>
    )
}

export default Menu;