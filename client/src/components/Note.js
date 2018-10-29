import React from "react";

const Note = props => {
  return (
    <div className="Note">
      <h3>{props.title}</h3>
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
