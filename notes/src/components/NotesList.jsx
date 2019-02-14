import React from 'react';
import Note from './Note';

 const NotesList = props => (
    <div className="noteslist">
      <h2 className="list-heading">
        Your Notes:
      </h2>
      <div className="notes">
        {props.notes.map((note, i) => (
          <Note note={note} key={i} />
        ))}
      </div>
    </div>
  );
  
 export default NotesList; 
