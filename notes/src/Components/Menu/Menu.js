import React from 'react';
import {Link} from 'react-router-dom'

const Menu = () => {
    return(
        <div>
            <Link to = '/'> View Your Notes </Link>
            <Link to = '/notes/create'> Create a Note </Link>
        </div>
    )
}

export default Menu;