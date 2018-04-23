import React from 'react';
import { connect } from 'react-redux';
import notes from '../Reducers/notes.js';
import { editNote } from '../Actions/Notes.js';

const ViewNote = ({ note, title, content, deleteNote }) => {
  return (
    <div className='view'>
      <button onClick={() => deleteNote(note.id)}>Delete Note</button>
      <p>{note.title}</p>
      <p>{note.content}</p>
    <button onClick={() => editNote(note.id)}>Edit Note</button>
    <form>
        <input name="name" placeholder="Name" value={this.note.name}/>
    </form>
    </div>
    )
};

export default ViewNote; 