import React from "react";

const SingleNote = props => {
  const notes = props.notes;
  const target = props.target;
  const deleteNote = props.deleteNote;
  const edit = props.edit;
  return (
    <div className="singleNote">
      <div className="buttonDisplay">
        <button className="singleButton" onClick={() => edit(target)}>
          edit
        </button>
        <button className="singleButton" onClick={() => deleteNote(target)}>
          delete
        </button>
      </div>
      <h1 className="noteTitle">{notes[target].title}</h1>
      <p className="noteContent">{notes[target].content}</p>
    </div>
  );
};

export default SingleNote;