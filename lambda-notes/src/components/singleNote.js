import React from "react";

const SingleNote = props => {
  return (
    <div>
      <h3 className="heading">{this.props.note.title}</h3>
      <p>{this.props.note.text}</p>
      <div>Delete</div>
      <div>Edit</div>
    </div>
  );
};

export default SingleNote;
