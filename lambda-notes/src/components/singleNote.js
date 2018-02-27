import React from "react";

const SingleNote = props => {
  return (
    <div>
      <h3 className="heading">{props.title}</h3>
      <p>{props.text}</p>
      <div>Delete</div>
      <div>Edit</div>
    </div>
  );
};

export default SingleNote;
