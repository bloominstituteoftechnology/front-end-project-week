import React from 'react';
import {NavLink} from 'react-router-dom';

const SideBar = () => {
    return(
        <div>
            <h1>Lambda Notes</h1>
            <NavLink to='/'>
                <button>View Your Notes</button>
            </NavLink>
            <NavLink to='/new-note'>
                <button>+ Create New Note</button>
            </NavLink>
        </div>
    )
}

export default SideBar;