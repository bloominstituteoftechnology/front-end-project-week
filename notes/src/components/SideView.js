import React from 'react';
import './SideView.css'
import { NavLink } from 'react-router-dom';

 const Sideview = props => {
  return (
          <nav>
               <h1>Lambda<br/>Notes</h1>
               <NavLink  
                exact to='/'
                className="nav_link" 
                activeStyle={{ color: 'red' }}>View Your Notes</NavLink>
                
               <NavLink
                to='/create' 
                className="nav_link" 
                activeStyle={{ color: 'red' }}> + Create New Note</NavLink>
          </nav>
  )
}






export default Sideview; 