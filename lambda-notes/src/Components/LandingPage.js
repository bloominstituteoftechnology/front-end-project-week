import React from 'react';

import './Content.css';

export const LandingPage = () => {
  return(
    <div className='Content__Wrapper'>
      <h3 className='Content__Heading'>Welcome back to Lambda Notes, [USER]</h3>
      <p className='Content'>The best place to keep your notes!</p>
    </div>
  );
}