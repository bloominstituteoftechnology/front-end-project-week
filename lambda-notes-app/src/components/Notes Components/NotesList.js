import React from 'react';

import Note from './Note';

const NotesList = props => {
  return (
    <div className='Notes-List'>
      {/* Side Bar goes here */}
      <div className='70-percent'>
        <h3>Your Notes: </h3>
        <ul>
          {props.notes.map(note => {
            return (
              <Note
                key={note._id}
                title={note.title}
                noteBody={note.textBody}
              />
            )
          })}
        </ul>
      </div>
    </div>
  )
}


export default NotesList;
