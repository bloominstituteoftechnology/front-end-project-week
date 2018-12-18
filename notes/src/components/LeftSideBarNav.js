import React from "react";
import { NavLink } from "react-router-dom";

const LeftSideBarNav = () => {
    return(
        <div className='left-nav'>
            <h1>Lambda Notes</h1>
            <NavLink to='/'>
                <button className='btn' type='button'>View Your Notes</button>
            </NavLink>
            <NavLink to='/create' >
                <button className='btn' type='button'>+ Create New Note</button>
            </NavLink>
        </div>
    );
}


export default LeftSideBarNav;