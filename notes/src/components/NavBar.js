import React from 'react';
import { Link } from 'react-router-dom';



const NavBar = () => {
  return (
    <div className='nav-bar'>
      <h1>Lambda</h1>
        <h1>Notes</h1>
        <Link to="/" className='nav-button'>
          View Your Notes
        </Link>
        <Link to="/CreateNewView" className='nav-button'>
          + Create New Note          
        </Link>
    </div> // nav-bar
  )
}

export default NavBar;