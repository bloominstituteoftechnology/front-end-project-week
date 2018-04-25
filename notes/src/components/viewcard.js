import React from "react";

const ViewCard = props => {
  return (
    <div className="right-div">
      <div className="link-text-div">
        <span className="link-text" onClick={() => props.changeToEdit()}>
          <u>edit</u>
        </span>
        <span className="link-text" onClick={() => props.removeNote(props.note.id)}>
          <u>delete</u>
        </span>
      </div>
      <div className="view-card">
        <h3 className="notes-h3 view-h3">{props.note.title}</h3>
        <div className="notes-text-full">{props.note.text}</div>
      </div>
    </div>
  );
};

export default ViewCard;
