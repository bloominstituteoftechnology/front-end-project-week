import React from 'react';
import Note from './note'

const NotesList = props => {
  return (
    <div onDragOver={()=>{}} className='notes-container'>
      <h2 className='your-notes'>Your Notes:</h2>
      <button className='sort-button'>Sort A-Z</button>
      {props.notes.map(note => {
        const id = note.id
        return (
          <Note key={id} id ={id} note={note} delete={props.delete}  />
        );
      })}
    </div>
  );
}

export default NotesList;