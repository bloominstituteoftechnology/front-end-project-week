import React from 'react';
import '../styles/NoteThumb.css';

// props.note is a note object with title and content
const NoteThumb = props => {
  const charsVisible =
    props.note.content.length > 140 ? 140 : props.note.content.length;
  return (
    <div className="noteThumb__container">
      <h3>{props.note.title}</h3>
      <hr />
      <p>{props.note.content.slice(0, charsVisible)}..</p>
    </div>
  );
};

export default NoteThumb;
