import React from "react";

const SingleNote = props => {
  const notes = props.notes;
  const target = props.target;
  const deleteNote = props.deleteNote;
  const edit = props.edit;
  return (
    <div className="singleNote">
      <button onClick={() => edit(target)}>edit</button>
      <button onClick={() => deleteNote(target)}>delete</button>
      <h1 className="singleNoteTitle">{notes[target].title}</h1>
      <p className="singleNoteContent">{notes[target].content}</p>
    </div>
  );
};

export default SingleNote;
