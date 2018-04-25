import React from 'react';

import './Content.css';
import './AddNote.css';

export const AddNote = () => {
  return(
    <div className='Content__Wrapper'>
      <h3 className='Content__Heading'>Create New Note:</h3>
      <div className='Content AddNote'>
        <input className='AddNote__Title' type='text' placeholder='Note Title' />
        <textarea className='AddNote__Content' type='text' placeholder='Note Content' />
        <button className='AddNote__Save'>Save</button>
      </div>
    </div>
  );
}