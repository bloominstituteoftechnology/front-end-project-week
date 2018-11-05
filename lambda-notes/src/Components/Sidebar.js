import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <h1>Lambda Notes</h1>
      <Link to='/'>
        <div className='button'>View Your Notes</div>
      </Link>
      <Link to='/add'>
        <div className='button'>+ Create New Note</div>
      </Link>
    </div>
  )
}

export default Sidebar;