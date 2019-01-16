import React from "react";
import { Link } from "react-router-dom";

const DisplayNoteCard = props => {
  return (
    <div className="displayNoteCard">
      <Link to={`/Notes/${props.note._id}`} style={{ textDecoration: "none" }}>
        <h3> {props.note.title} </h3>
        <p> {props.note.textBody}</p>
      </Link>
    </div>
  );
};

export default DisplayNoteCard;
