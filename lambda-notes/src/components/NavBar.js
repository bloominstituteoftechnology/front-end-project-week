import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return(
        <div className='nav-wrapper'>
            <div className='nav'>
                <h1>Lambda <br/> Notes</h1>
               
                    <NavLink to='/' className='nav-links'>View Your Notes</NavLink>
                    <NavLink to='' className='nav-links'>+ Create New Note</NavLink>
                </div>
            
        </div>
    );
};

export default NavBar