import React from 'react';
import { connect } from 'react-redux';
// import { deleteNote } from '../actions/notes';

const ViewNote = ({ note, deleteNote }) => {
  return (
    <div className='viewNote'>
      <button onClick={() => deleteNote(note.id)}>Delete Note</button>
      {/* <button onClick={() => editNote(note.id)}>Edit Note</button> */}
      <h3>{note.title}</h3>
      <p>{note.content}</p>
    </div>
    )
};

export default ViewNote;