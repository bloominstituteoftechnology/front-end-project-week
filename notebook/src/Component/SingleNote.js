import React from "react";
// import { Link } from "react-router-dom";

const SingleNote = props => {
  return (
    
    <React.Fragment key={props._id}>
    <button>Edit</button>
    <button>Delete</button>
      <div>{props.note.title}</div>
      <div>{props.note.textBody}</div>
    
    </React.Fragment>
  );
};

export default SingleNote;
