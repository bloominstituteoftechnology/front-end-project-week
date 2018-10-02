import React from 'react';
import {Link} from 'react-router-dom';
import './Note.css';

const Note = props => {
  return (
    <React.Fragment>
    <div className='display'>
      <h3>{props.note.tags}</h3>
      <strong>{props.note.title}</strong>
      <p>{props.note.textBody}</p>
    </div>
    </React.Fragment>
  );
};

Note.defaultProps = {
  tags: '',
  title: '',
  textBody: ''
};

export default Note;

