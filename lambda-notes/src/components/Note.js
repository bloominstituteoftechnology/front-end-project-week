import React from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux'
import { fetchSingleNote } from '../actions';

const Note = props => {
  return (
    <div className="note-card">
      <Link to={`/note/${props.id}`}>
        <h4 className="note-title" onClick={() => props.fetchSingleNote(props.id)}>
          {props.title}
        </h4>
      </Link>
      <hr />
      <p>{props.text}</p>
    </div>
  );
};

export default connect(
  null,
  { fetchSingleNote })(Note);
