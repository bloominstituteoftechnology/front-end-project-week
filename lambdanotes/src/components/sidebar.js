import React from 'react';
import { NavLink } from 'react-router-dom';
 const SideBar = () => {
    return (
        <div className="side-bar">
            <h1>Lambda Notes</h1>
            <NavLink to='/' className="button">View Your Notes</NavLink>
            <NavLink to='/create-note' className="button">+Create New Note</NavLink>
        </div>
    );
};
 export default SideBar; 