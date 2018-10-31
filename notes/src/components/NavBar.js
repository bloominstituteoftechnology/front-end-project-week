import React from 'react'
import {Link} from 'react-router-dom'
const NavBar = props => {
  return (
      <div className="navbar">
        <h1>Lambda Notes</h1>
        <Link to={'/'}>
          <div className='nav-button'>
            <p>View Your Notes</p>
          </div>
        </Link>

        <Link to={'/newNote'}>
          <div className="nav-button">
            <p>+ Create New Note</p>
          </div>
        </Link>
      </div>
      );
};
export default NavBar;
