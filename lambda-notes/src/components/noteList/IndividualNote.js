import React from "react";
import { Link } from "react-router-dom";

export const IndividualNote = props => {
  console.log("Individual NOtes Props", props.notes);
  console.log("Individual Params Match", props.match);
  return (
    <div className="individualNote">
      <Link to={`/edit/${props.match.params.id}`}>
        <button>edit</button>
      </Link>
      {/* <Link to={`/delete/${props.match.params.id}`}>
        <button>delete</button>
      </Link> */}
      <h2>{props.notes[props.match.params.id].title}</h2>
      <h2>{props.notes[props.match.params.id].description}</h2>
      <Link to={"/"}>Home</Link>
    </div>
  );
};
