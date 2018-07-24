import React, { Component } from "react";
import { Link } from "react-router-dom";

class Note extends Component {
  constructor(props) {
    super(props);
    this.state = {
      note: props.note
    };
  }
  render() {
    return (
      <li>
        <Link to={`/note/${this.state.note._id}`}>
          {this.state.note.textBody}
        </Link>
      </li>
    );
  }
}

export default Note;
