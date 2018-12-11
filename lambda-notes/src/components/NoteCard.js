import React from "react";
import { Link } from "react-router-dom";

class NoteCard extends React.Component {
  deleteHandler = event => {
    event.preventDefault();
    this.props.deleteNote(this.props.singleNote._id);
    this.props.history.push("/");
  };

  render() {
    return (
      <div>
        <h1>{this.props.singleNote.title}</h1>
        <p>{this.props.singleNote.textBody}</p>
        <Link to={`/edit-note/${this.props.singleNote._id}`}>
          <button>Edit Note</button>{" "}
          <button onClick={this.deleteHandler}>Delete Note</button>
        </Link>
      </div>
    );
  }
}

export default NoteCard;
