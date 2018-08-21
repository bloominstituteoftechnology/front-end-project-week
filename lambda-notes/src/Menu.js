import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <div className='menu'>
      <h1>Lambda Notes</h1>
      <Link to='/'>
        <button className='view-notes'>View Your Notes</button>
      </Link>
      <Link to='add'>
        <button className='add-btn'>+Create New Note</button>
      </Link>
    </div>
  );
}

export default Menu;
