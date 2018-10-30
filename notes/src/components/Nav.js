import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <div className='nav-bar'>
      <h1>Lambda Notes</h1>
      <NavLink className='nav-items' to='/' >View Notes</NavLink>
      <NavLink className='nav-items' to='/notes/add'>+ Add New Note</NavLink>   
    </div>
  );

}

export default Nav; 
