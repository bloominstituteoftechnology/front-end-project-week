import React from "react";

const SingleNote = props => {
  return (
    <div>
      <h3 className="heading">{this.title}</h3>
      <p>{this.text}</p>
      <div>Delete</div>
      <div>Edit</div>
    </div>
  );
};

export default SingleNote;
