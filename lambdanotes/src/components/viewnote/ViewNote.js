import React from "react"
import "./ViewNote.css";
import { Link } from 'react-router-dom';

const ViewNote = props => {
  return (

    <div>
      <Link to={`./${props.match.params.id}/edit`}>
        <small className="view-edit view-options">Edit</small>
      </Link>
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
