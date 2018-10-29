import React from 'react';
import { NavLink } from 'react-router-dom';


const Navigation = () => {
  return (
    <div className='nav-bar'>
      <h1>Lambda Notes</h1>
      <NavLink to='/' >View Notes</NavLink>
      <NavLink to='/new-note'>+ Add New Note</NavLink>   
    </div>
  );

}

export default Navigation; 
