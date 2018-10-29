import React from 'react'
import {Link} from 'react-router-dom'
const NavBar = props => {
  return (
      <div className="navbar">
        <h2>Lambda Notes</h2>
        <Link to={'/'}>
          <div className='nav-button'>
            View Your Notes
          </div>
        </Link>

        <Link to={'/newnote'}>
          <div className="nav-button">
            + Create New Note
          </div>
        </Link>
      </div>
      );
};
export default NavBar;
