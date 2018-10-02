import React from 'react';
import {Link} from 'react-router-dom';
import './Note.css';

const Note = props => {
  return (
    <React.Fragment>
    <Link to={`/notes/${props.note._id}`}>
      <div className='display'>
        <h3>{props.note.tags}</h3>
        <strong>{props.note.title}</strong>
        <p>{props.note.textBody}</p>
      </div>
    </Link>
    </React.Fragment>
  );
};

Note.defaultProps = {
  tags: '',
  title: '',
  textBody: ''
};

export default Note;

