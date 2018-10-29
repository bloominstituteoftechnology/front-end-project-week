import React from 'react';
import {Link} from 'react-router-dom';

let Nav = () => {
    return (
        <nav>
            <h1>Lambda Notes</h1>
            <Link to='/'>View Notes</Link>
            <Link to='/add'>Add Note</Link>
        </nav>
    )
}

export default Nav;