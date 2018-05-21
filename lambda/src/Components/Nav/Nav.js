import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
    return (
        <div className='navigation'>
          <h1>Lambda<br></br>Notes</h1>
          <Link to='/' className='link'>View Your Notes</Link>
          <Link to='/create-new-note' className='link'>Add New Note</Link>
        </div>
    )
};

export default Nav;