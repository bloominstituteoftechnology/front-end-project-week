// React and Router
import React from 'react';
import { Link } from 'react-router-dom';

// Styling
import './Nav.css';

const Nav = () => {
    return (
        <div className='navigation'>
          <h1>Lambda<br></br>Notes</h1>
          <Link to='/' className='link'>View Your Notes</Link>
          <Link to='/create-new-note' className='link'>+ Create New Note</Link>
        </div>
    )
}; // end of Nav

export default Nav;