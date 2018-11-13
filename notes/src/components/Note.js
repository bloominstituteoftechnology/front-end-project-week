import React from "react";
import { Link } from "react-router-dom";

class Note extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="note">
        <Link
          to={`/notes/${this.props.note._id}`}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <h3 className="note-title">{this.props.note.title}</h3>
          <h4 className="note-tag">{this.props.note.tags}</h4>
          <p className="note-body">{this.props.note.textBody}</p>
        </Link>
      </div>
    );
  }
}

export default Note;
