import React from 'react';
import './SideBar.css';
import { NavLink } from 'react-router-dom';

const SideBar = (props) => {
    return (
        <div className='sideBarContainer'>
            <div className='forBorder'>
                <div className ='sideBar'>
                    <h1>Lambda Notes</h1>
                    <NavLink to='/' activeClassName="selected">
                        <button>View Your Notes</button>
                    </NavLink>
                    <NavLink to='/new-note' activeClassName="selected">
                        <button>+ Create New Note</button>
                    </NavLink>  
                </div>
            </div>
        </div>
    );
}

export default SideBar;