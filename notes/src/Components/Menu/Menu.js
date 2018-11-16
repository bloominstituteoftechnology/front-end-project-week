import React from 'react';
import {Link} from 'react-router-dom';

import './menu.css';

const Menu = () => {
    return (
        <div className='main-menu'>
            <Link to='/' className='menu-button'>View Your Notes</Link>
            <Link to='/notes/create' className='menu-button'>+ Create New Note</Link>
        </div>
    )
}

export default Menu;