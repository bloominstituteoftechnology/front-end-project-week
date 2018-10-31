import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <div className='nav-bar'>
        <div className="nav-items-container">
      <NavLink className='nav-items' to='/' >View Notes</NavLink>
      <NavLink className='nav-items' to='/notes/add'>+ Add New Note</NavLink>   
      </div>
    </div>
  );

}

export default Nav; 
