import React from "react";
import { NavLink } from "react-router-dom";

const SingleNote = props => {
  console.log("props", props);
  const id = props.match.params.id - 1;
  return (
    <div>
      <h3 className="heading">{props.notes[id].title}</h3>
      <p>{props.notes[id].text}</p>
      <NavLink>Edit</NavLink>
      <div>Delete</div>
    </div>
  );
};

export default SingleNote;
