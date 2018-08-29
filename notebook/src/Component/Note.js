import React from "react";
import { Link } from "react-router-dom";

const Note = props => {
  return (
    
    <React.Fragment key={props._id}>
    <Link to={"/Note._id"}>
      <div>{props.note.title}</div>
      <div>{props.note.textBody}</div>
      </Link>
    </React.Fragment>
  );
};

export default Note;
