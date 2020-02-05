import React from 'react';

function NoteDescription(props) {
  return (
    <div>
      <p className="note-description">{props.note.description}</p>
    </div>
  );
}

export default NoteDescription;
