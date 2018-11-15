import React from "react";

const NoteCard = props => {
  // const id = props.match.params.id;
  return (
    <div className="container">
      <div className="card-action"> 
        <p> edit </p> <p> delete </p>
      </div>
      <div className="note-title">
        <h3>{props.note.title}</h3>
      </div>
      <div className="note-text">
      <h3>{props.note.textBody}</h3>
      </div>
      <div className="note-date"> 
        <p>October 3rd, 2018</p>
      </div>
    </div>
  );
};

export default NoteCard;
