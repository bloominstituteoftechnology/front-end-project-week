import React from 'react';
import {Link} from 'react-router-dom';

function Note({ note, }) {

  return (
    <div className="single-note">

        <h4>{note.title}</h4>
        <p>{note.textBody}</p>
        <p> in the note component </p>

    </div>
  );
};

// Note.defaultProps = {
//   title: '',
//   textBody: ''
// };

export default Note;
