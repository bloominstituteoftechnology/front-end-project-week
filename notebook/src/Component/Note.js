import React from "react";
import { Link } from "react-router-dom";

const Note = props => {
  return (
    
    <div key={props._id} className="each-ind-note">
    <Link to={`/eachnote`}>
      <div>{props.note.title}</div>
      <div>{props.note.textBody}</div>
      </Link>
    </div>
  );
};

export default Note;
