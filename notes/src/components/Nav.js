import React from 'react';
import { NavLink } from 'react-router-dom';
import TopNav from './TopNav';

const Nav = () => {
  return (
    <div className='nav-bar'>
        <TopNav />
        <div className="nav-items-container">
      <NavLink className='nav-items' to='/' > <i class="fas fa-book-open"></i> &nbsp;View Notes</NavLink>
      <NavLink className='nav-items' to='/notes/add'><i class="fas fa-plus"></i> &nbsp;Add New Note</NavLink>   
      </div>
    </div>
  );

}

export default Nav; 
