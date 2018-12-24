import React from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

function Note({ note, deleteNote, editNote, history }) {

  return (
    <div className="single-note-container">
      <div className='buttons'>
        <div
          className='delete'
          onClick={() => {
            deleteNote(note._id);
            history.push('/');
          }}>delete</div>

        <Link to='/edit-form'>
        <div
          className='edit'
          onClick={(ev) => {
          editNote(ev, note);
          history.push('/edit-form');
        }}>edit</div>
        </Link>
      </div>

      <h3>{note.title}</h3>
      <p>{note.textBody}</p>

    </div>
  );
};

// Note.defaultProps = {
//   title: '',
//   textBody: ''
// };

export default Note;
