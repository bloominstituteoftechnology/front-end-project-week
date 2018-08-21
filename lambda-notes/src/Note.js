import React from 'react';
import { Link } from 'react-router-dom';

const Note = props => {
  const id = props.match.params.id;
  const note = props.notes[id];

  const deleteHandler = () => {
    return ;
  }

  return (
    <div className='note-view'>
      <div className='note-links'>
        <Link to={`/edit/${id}`}><p>edit</p></Link>
        <p onClick={this.deleteHandler}>delete</p>
      </div>
      <div className='note-content'>
        <h5>{note.title}</h5>
        <p>{note.text}</p>
      </div>
    </div>
  );
}

export default Note;
