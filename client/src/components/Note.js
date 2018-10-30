import React from "react";
import { Link } from "react-router-dom";

const Note = props => {
  return (
    <div className="Note">
      <div className="title">
        {" "}
        <h3>{props.title}</h3>
      </div>
      <p>{props.textBody} </p>
    </div>
  );
};
//
Note.defaultProps = {
  title: "",
  textBody: ""
};

export default Note;
