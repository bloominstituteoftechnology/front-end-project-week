import React from 'react';
import { NavLink } from 'react-router-dom';

const SideBar = () => {
    return(
        <div className='side-bar'>
            <span class='side-bar-title'>
                Lambda Notes
            </span>

            <NavLink exact to='/'>
                <div className="button">View Your Notes</div>
            </NavLink>
            <NavLink to='/new-note'>
                <div className="button">+ Create New Note</div>
            </NavLink>
        </div>
    );
}
export default SideBar;