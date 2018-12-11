import React from "react";
import { Link } from "react-router-dom";

class NoteCard extends React.Component {
  render() {
    return (
      <>
        <section className="one-note-nav">
          <Link to={`/edit-note/${this.props.singleNote._id}`}>
            <p>edit</p>
          </Link>
          <p onClick={this.props.toggleModal}>delete</p>
        </section>
        <div className="one-note">
          <h1 className="note-title">{this.props.singleNote.title}</h1>
          <p className="note-text">{this.props.singleNote.textBody}</p>
        </div>
      </>
    );
  }
}

export default NoteCard;
