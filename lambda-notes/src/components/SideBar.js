import React from 'react';
import {NavLink} from 'react-router-dom';

const SideBar = () => {
    return(
        <div>
            <h1>Lambda Notes</h1>
            <NavLink to='/list-view'>
                <button>View Your Notes</button>
            </NavLink>
            <NavLink to='/create-new'>
                <button>+ Create New Note</button>
            </NavLink>
        </div>
    )
}

export default SideBar;