import React from 'react';
import {Link} from 'react-router-dom';

const Note = props => {
  return (
    <div className="single-note">
      <Link to={`/notes/${props.id}`}>
        <h4>{props.title}</h4>
        <p>{props.textBody}</p>
      </Link>
    </div>
  );
};

Note.defaultProps = {
  title: '',
  textBody: ''
};

export default Note;
