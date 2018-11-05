import React from 'react';
import NavBar from './NavBar';
import SingleNote from './SingleNote';

const NoteView = props => {

  //

  return (
    <div className='note-view'>
      <NavBar />
      <div className='single-note-extended-container'>
        <div>
          <button>edit</button>
          <button>delete</button>
        </div>
        <ul>
          <SingleNote />
        </ul>
        {/* <h3>Note Title (need to update for each note)</h3>
        <p>Note Content (need to update for each note). No max length!!!</p> */}
      </div> 
    </div>
  )
}

export default NoteView;