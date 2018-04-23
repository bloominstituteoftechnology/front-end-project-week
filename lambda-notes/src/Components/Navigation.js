import React from 'react';

import './Navigation.css';

export const Navigation = () => {
  return(
    <div className='Navigation'>
      <h1 className='Navigation__Heading'>Lambda Notes</h1>
      <div className='Navigation__Buttons'>
        <button className='Navigation__Button'>View Your Notes</button>
        <button className='Navigation__Button'>+ Create New Note</button>
      </div>
    </div>
  );
}