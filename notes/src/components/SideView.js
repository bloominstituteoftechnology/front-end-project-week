import React from 'react';
import './SideView.css'
import { NavLink } from 'react-router-dom';

 const Sideview = props => {
  return (
          <nav>
              <h1>Lambda<br/>Notes</h1>
              <NavLink 
               to='/'
               className="nav_link" 
               activeClassName="activeRoute"
               activeStyle={{ color: 'teal' }}>View Your Notes</NavLink>
              <NavLink
               to='/create' 
               className="nav_link" 
               activeClassName="activeRoute"
               activeStyle={{ color: 'teal' }}> + Create New Note</NavLink>
          </nav>
  )
}






export default Sideview; 