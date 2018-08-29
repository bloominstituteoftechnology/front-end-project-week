import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <div>
      <h1>Lambda<br></br>Notes</h1>
      <div className='nav-button-container'>
        <div className='nav-button'>
          <Link to="/">View Your Notes</Link>
        </div>
        <div className='nav-button'>
          <Link to="/Create">+ Create New Note</Link>
        </div>
      </div>
    </div>
  );
};

export default Navigation;