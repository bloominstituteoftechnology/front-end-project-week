import React from 'react';
import { connect } from 'react-redux';
import notes from '../Reducers/notes.js';

const ViewNote = ({ notes, deleteNote }) => {
  return (
    <div className='view'>
      <button onClick={() => deleteNote(notes.id)}>Delete Note</button>
      <h3>{notes.title}</h3>
      <p>{notes.content}</p>
    </div>
    )
};

export default ViewNote; 