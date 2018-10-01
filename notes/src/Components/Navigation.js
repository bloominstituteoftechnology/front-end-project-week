import React from 'react';
import {NavLink} from 'react-router-dom';


const Navigation = () => {
    return (
        <ul>
            <li>
                <NavLink to='/'>View Your Notes</NavLink>
            </li>
            <li>
                <NavLink to='/create'>Create New Note</NavLink>
            </li>
        </ul>
    )
}

export default Navigation;