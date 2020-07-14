import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className='home-view-component'>
      <h3 className='welcome-message'>Notes</h3>
      
      <Link className='link-notes' to ='/notes'>Lets Study!</Link>
    </div>
  );
}

export default Home;