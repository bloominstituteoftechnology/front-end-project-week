import React from 'react';
import { NavLink } from 'react-router-dom';

import './Navigation.css';

export const Navigation = () => {
  return(
    <div className='Navigation'>
      <NavLink to='/' className='Link'><h1 className='Navigation__Heading'>Lambda Notes</h1></NavLink>
      <div className='Navigation__Buttons'>
        <NavLink to='/notes'><button className='Navigation__Button'>View Your Notes</button></NavLink>
        <NavLink to='/addnote'><button className='Navigation__Button'>+ Create New Note</button></NavLink>
      </div>
    </div>
  );
}