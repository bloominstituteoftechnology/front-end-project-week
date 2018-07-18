import React from "react"
import "./ViewNote.css";

const ViewNote = props => {
  return (

    <div>
      <small className="view-edit view-options">Edit</small>
      <small className="view-delete view-options">Delete </small>
      <h2>
        {props.notes[props.match.params.id].title}
      </h2>
      <div className="single-note">
        {props.notes[props.match.params.id].body}
      </div>
    </div>
  )
}

export default ViewNote;
