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
        <Link to={`/notes/${this.props.note.id}`} style={{ textDecoration: 'none', color: 'inherit' } }>
          <h3 className="note-title">{this.props.note.title}</h3>
          <p className="note-body">{this.props.note.body}</p>
        </Link>
      </div>
    );
  }
}

export default Note;
