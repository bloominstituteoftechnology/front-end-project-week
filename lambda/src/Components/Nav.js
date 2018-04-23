import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Nav () {
  return (
    <nav className='nav'>
    <h1>Notes For Lambda</h1>
      <p>
        <NavLink to='/' exact activeClassName='active'>
        View Notes
        </NavLink>
      </p>
      <p>
        <NavLink to='/add' activeClassName='active'>
         Make New Note
        </NavLink>
      </p>
    </nav>
  )
};