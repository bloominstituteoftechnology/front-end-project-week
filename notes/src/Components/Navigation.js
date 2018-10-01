import React from 'react';
import {NavLink} from 'react-router-dom';

const Navigation = () => {
    return (
        <div>
            <NavLink to='/note/get/all'>View Your Notes</NavLink>
            <NavLink to='/note/create'>Create New Note</NavLink>
        </div>
    )
}

export default Navigation;