import React from "react";
import { Link } from "react-router-dom";

class Note extends React.Component {
  render() {
    return (
      <div className="note">
        <Link
          to={`/notes/${this.props.note._id}`}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <h4 className="note-tag">
            {this.props.note.tags.map(tag => `${tag} `)}
          </h4>
          <h3 className="note-title">{this.props.note.title}</h3>
          <p className="note-body">{this.props.note.textBody}</p>
        </Link>
      </div>
    );
  }
}

export default Note;
