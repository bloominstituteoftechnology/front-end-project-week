import React from 'react';

const Note = props => {
  const { id, title, body} = props.note;
  console.log("note id", props.note.id)
  return (
    <div>
      hello
    </div>
  );
};

export default Note;
