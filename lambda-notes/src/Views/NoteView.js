import React from 'react';
import { Link } from 'react-router-dom';
import './NoteView.css'

export const NoteView = props => {
  // const { id } = props;
  console.log('passed props', props);
  // const urlParam = props.location.state.id;
  const id = props.match.params.id
  const note = props.notes.find(note => note._id == id); 
  console.log('note', note)
  if (!note) {
    return (
      <div>loading</div>
    )
  } else {
    return (
    <div className="NoteView">
      <div className="controls">
      <Link to={`/edit/${id}`}>
        <span className="edit">edit</span>
      </Link>
      <span className="delete">delete</span>
      </div>
      <h1>
        {note.title}
      </h1>
      <p>
        {note.textBody}
      </p>
    </div>
    )
  }
}