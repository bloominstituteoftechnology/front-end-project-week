import React from 'react';

import './Content.css';
import './NotesList.css';

export const NotesList = () => {
  return(
    <div className='Content__Wrapper'>
      <h3 className='Content__Heading'>Your Notes:</h3>
      <div className='Content NotesList'>
        <div className='Note'>
          <h4 className='Note__Heading'>Note Title</h4>
          <p className='Note__Content'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet.</p>
        </div>
        <div className='Note'>
          <h4 className='Note__Heading'>Note Title</h4>
          <p className='Note__Content'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet.</p>
        </div>
        <div className='Note'>
          <h4 className='Note__Heading'>Note Title</h4>
          <p className='Note__Content'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet.</p>
        </div>
        <div className='Note'>
          <h4 className='Note__Heading'>Note Title</h4>
          <p className='Note__Content'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet.</p>
        </div>
      </div>
    </div>
  );
}