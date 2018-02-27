import React from 'react';

const NoteView = (props) => {
  return <div>{props.currentNote.content}</div>
}

export default NoteView;