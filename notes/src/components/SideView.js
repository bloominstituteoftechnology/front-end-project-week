import React from 'react';
import './SideView.css'
import { NavLink } from 'react-router-dom';

 const Sideview = props => {
  return (
          <nav>
              <h1>Lambda<br/>Notes</h1>
              <button>View Your Notes</button>
              <NavLink to='/create'> + Create New Note</NavLink>
          </nav>
  )
}






export default Sideview; 