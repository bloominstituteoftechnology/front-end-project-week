import React from "react";
import { Link } from "react-router-dom";

class Note extends React.Component {
  render() {
    return (
      <Link
        to={`/notes/${this.props.note._id}`}
        style={{ textDecoration: "none", color: "inherit" }}
        className="note"
      >
        <h3 className="note-title">{this.props.note.title}</h3>
        <p className="note-body">{this.props.note.textBody}</p>
      </Link>
    );
  }
}

export default Note;
