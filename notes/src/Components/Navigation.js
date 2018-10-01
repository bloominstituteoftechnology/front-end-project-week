import React from 'react';
import {NavLink} from 'react-router-dom';


const Navigation = () => {
    return (
        <ul>
            <li>
                <NavLink to='/get/all'>View Your Notes</NavLink>
            </li>
            <li>
                <NavLink to='/create'>Create New Note</NavLink>
            </li>
        </ul>
    )
}

export default Navigation;