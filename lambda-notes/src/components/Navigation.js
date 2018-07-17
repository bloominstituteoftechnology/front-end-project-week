import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <div className='navigation'>
      <h1>Lambda Notes</h1>
      <div className='nav-links'>
        <Link to='/' style={{ textDecoration: 'none' }}><button>View Your Notes</button></Link>
        <Link to='/add' style={{ textDecoration: 'none' }}><button>+ Create New Note</button></Link>
      </div>
    </div>
  )
}

export default Navigation;
