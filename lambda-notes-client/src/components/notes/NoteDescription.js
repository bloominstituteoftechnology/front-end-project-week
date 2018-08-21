import React from 'react';
import { Link } from 'react-router-dom';


const NoteDescription = props => {

  let note = props.notes.filter(item => item.id === parseInt(props.match.params.id, 10));

  const handleDelete = () => {
    props.history.goBack();
    props.deleteNote(note[0].id)
  }

  if (note.length === 0) {
    return <h1>Loading</h1>
  } else {
    return (
      <div>
        <h1>{note[0].title}</h1>
        <p>{note[0].description}</p>
        <button onClick={() => {handleDelete()}}>delete</button>
        <Link to={`/notes/${note[0].id}/edit`}>Edit</Link>
      </div>
    );
  }
}

export default NoteDescription;
