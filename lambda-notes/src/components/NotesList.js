import React from 'react';
import NotePreview from './NotePreview';

const NotesList = props => {
  return (
    <div className='notes-list'>
      {props.notes.map(note => {
        return (<NotePreview key={note._id} note={note} />)
      })}
    </div>
  )
}

export default NotesList;
