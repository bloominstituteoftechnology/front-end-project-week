import React from 'react';
import {Link} from 'react-router-dom'
import './menu.css'

const Menu = () => {
    return(
        <div className = 'main-menu'>
            <Link to = '/' class = 'menu-button'> View Your Notes </Link>
            <Link to = '/notes/create' class = 'menu-button' > Create a Note </Link>
        </div>
    )
}

export default Menu;