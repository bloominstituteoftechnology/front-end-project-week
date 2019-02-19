import React from "react";
import { Link } from "react-router-dom";

class Note extends React.Component {
  render() {
    return (
      <Link
        to={`/notes/${this.props.note.id}`}
        style={{ textDecoration: "none", color: "inherit" }}
        className="note"
      >
        <h3 className="card-title">{this.props.note.title}</h3>
        <p className="card-body">{this.props.note.contents}</p>
      </Link>
    );
  }
}

export default Note;