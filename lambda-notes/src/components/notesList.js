import React from 'react';
import Note from './note'

const NotesList = props => {
  return (
    <div onDragOver={()=>{}} className='notes-container'>
      <h2 className='your-notes'>Your Notes:</h2>
      <button onClick={props.sortNotesAZ} className='sort-button'>Sort A-Z</button>
      {props.notes.map(note => {
        const id = note._id
        return (
          <Note draggable key={id} id ={id} note={props.note} delete={props.delete}  />
        );
      })}
    </div>
  );
}

export default NotesList;