import React from 'react';
import {Link} from 'react-router-dom';

const Note = props => {
  return (
    <div className="Note">
      <Link to={`/notes/${props.id}`}>
        <h3>{props.title}</h3>
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
