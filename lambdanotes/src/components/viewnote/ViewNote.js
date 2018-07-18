import React from "react"
import "./ViewNote.css";

const ViewNote = props => {
  return (

    <div>
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
