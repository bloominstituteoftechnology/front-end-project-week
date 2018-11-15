import React from "react";

const SingleNote = props => {
  return (
    <div className="single-note">
      <div className="note-header">
        <h1>{props.title}</h1>
        <div className="edit-buttons">
          <p>edit</p>
          <p>delete</p>
        </div>
      </div>
      <p>{props.textBody}</p>
    </div>
  );
};

export default SingleNote;
