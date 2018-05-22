import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const NoteView = props => {
  let foundNote = props.notes.filter(note => {
    return note.id == props.match.params.id;
  });

  return (
    <div className="noteViewBody">
      <div className="noteViewLinks">
        <Link className="link" to={`/note/${foundNote.id}/delete`}>
          Delete
        </Link>
        <Link className="link" to={`/note/${foundNote.id}/edit`}>
          Edit
        </Link>
      </div>
      <div className="noteViewTitle">{foundNote.title}</div>
      <div className="noteViewbody">{foundNote.body}</div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    notes: state.notes
  };
};

export default connect(mapStateToProps)(NoteView);
