import React from "react";

const SingleNote = props => {
  const notes = props.notes;
  const target = props.target;
  const deleteNote = props.deleteNote;
  console.log('This is your Target :', target);
  return (
    <div className="singleNote">
      <button>edit</button>
      <button onClick={() => deleteNote(target)}>delete</button>
      <h1 className="singleNoteTitle">{notes[target].title}</h1>
      <p className="singleNoteContent">{notes[target].content}</p>
    </div>
  );
};

export default SingleNote;
