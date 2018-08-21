import React from 'react';
import { Link } from 'react-router-dom';


const NoteDescription = props => {
  let note = props.notes.filter(item => item.id === parseInt(props.match.params.id, 10));
  return (
    <div>
      <h1>{note[0].title}</h1>
      <p>{note[0].description}</p>
      <Link to={`/notes/${note[0].id}/edit`}>Edit</Link>
    </div>
  );
}

export default NoteDescription;
