import React from 'react';

import './Content.css';
import './LandingPage.css';

export const LandingPage = () => {
  return(
    <div className='Content__Wrapper'>
      <h3 className='Content__Heading Greeting'>Welcome back to Super Duper Dope Notes</h3>
      <p className='Content Greeting__Message'>The best place to keep your notes!</p>
    </div>
  );
}