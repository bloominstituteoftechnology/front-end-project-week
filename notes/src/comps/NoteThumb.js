import React from 'react';
import '../styles/NoteThumb.css';

// props.note is a note object with title and content
const NoteThumb = props => {
  const charsVisible =
    props.note.content.length < 120 ? props.note.content : (props.note.content.slice(0, 120) + '...');

  return (
    <div className="noteThumb__container">
      <h3 className="noteThumb__title">{props.note.title}</h3>
      <p className="noteThumb__content">
        {charsVisible}
      </p>
    </div>
  );
};

export default NoteThumb;
