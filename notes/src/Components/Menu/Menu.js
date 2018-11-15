import React from 'react';
import {Link} from 'react-router-dom';

const Menu = () => {
    return (
        <div className='main-menu'>
            <Link to='/'>View Your Notes</Link>
            <Link to='/notes/create'>+ Create New Note</Link>
        </div>
    )
}

export default Menu;