import React, { Component } from "react";
import { Link } from "react-router-dom";

class Note extends Component {
  render() {
    console.log(this.props.notes);
    return (
      <div className="note-card">
        <Link
          to={`/ViewNote/${this.props.id}`}
          className="card-link"
          onClick={this.handleClick}
        >
          <h4>{this.props.notes.title}</h4>
          <hr />
          <p>{this.props.notes.text}</p>
        </Link>
      </div>
    );
  }
}

export default Note;
