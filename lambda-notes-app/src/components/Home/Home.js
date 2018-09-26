import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='home-view-component'>
      <h3>Notes</h3>
      
      <Link to ='/notes'>Lets Study!</Link>
    </div>
  );
}

export default Home;