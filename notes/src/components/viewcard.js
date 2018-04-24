import React from "react";

const ViewCard = props => {
  console.log(props.note);
  return (
    <div className="right-div">
      <div className="link-text-div">
        <span className="link-text">
          <u>edit</u>
        </span>
        <span className="link-text">
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
