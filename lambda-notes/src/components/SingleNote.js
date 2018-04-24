import React from "react";

const SingleNote = props => {
  return (
    <div className="note__card">
      <h5>{props.note.title}</h5>
      <hr className="ruler" />
      <p className="note__body">{props.note.text}</p>
    </div>
  );
};

export default SingleNote;
