import React from "react";
import { Link } from "react-router-dom";

class Note extends React.Component {

  render() {
    return (
      <div key={this.props.id} className="note-card">
        <Link to ={`/notes/${this.props.id}`} >
          <h2>{this.props.title}</h2>
        </Link>
        <p>{this.props.body}</p>
        <button
          onClick={() => this.props.deleteNote(this.props.id)}
        >
          X
        </button>
      </div>
    );
  }
}

export default Note;