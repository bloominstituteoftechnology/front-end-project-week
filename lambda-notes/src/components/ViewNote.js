import React from "react";

export const ViewNote = ({ match, notes }) => {
  const note = notes
    .filter(note => note.id === parseInt(match.params.id))
    .shift();
  return (
    <div className="col-9 right__side">
      <div className="row">
        <div className="notes__head">
          <h4>{note.title}</h4>
        </div>
      </div>
      <div className="row">
        <div className="notes__body">
          <p>{note.text}</p>
        </div>
      </div>
    </div>
  );
};
