import React from 'react';
import { NavLink } from 'react-router-dom';

const SideBar = props => {
    return (
        <div className="aside">
            <h1>Lambda Notes</h1>
            <button>
                <NavLink to={'/'}> View Your Notes</NavLink>
            </button>
            <button>
                <NavLink to={'/notes/create'}> + Create Your Note</NavLink>
            </button>
        </div>
    )
}

export default SideBar;