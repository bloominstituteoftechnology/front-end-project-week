import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function Home() {
  return (
    <div className='home-div'>
        <h1 className='title'>Lambda Notes</h1>
       <div className='notes-link'> 
          <Link to="/notes" 
            style={{textDecoration: 'none', color: 'gray'}}
          >
            View Notes
          </Link>
       </div>
  </div>
  );
}

export default Home;
