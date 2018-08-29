import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <div>
      <h1>Lambda<br></br>Notes</h1>
      <div className='nav-button-container'>
        <Link to="/"><button className='nav-button'>View Your Notes</button></Link>
        <Link to="/Create"><button className='nav-button'>+ Create New Note</button></Link>
      </div>
    </div>
  );
};

export default Navigation;