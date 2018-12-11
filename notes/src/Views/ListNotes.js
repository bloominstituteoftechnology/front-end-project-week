import React, { Component } from "react";
import { Link } from 'react-router-dom';
import Note from "../components/Note";

import "../styles/Styles.css";

class ListNotes extends Component {
  render() {
    return (
      <div className="view note-list">
        {this.props.notes.map(note => (
          <Link to={`/n/${note.id}`} key={note.id}>
            <Note
              id={note.id}
              title={note.title}
              content={note.textBody}
            />
          </Link>
        ))}
      </div>
    );
  }
}

export default ListNotes;
