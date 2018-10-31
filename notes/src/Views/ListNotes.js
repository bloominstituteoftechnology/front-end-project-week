import React, { Component } from "react";
import { Link } from 'react-router-dom';
import Note from "../components/Note";

import "../styles/Styles.css";

class ListNotes extends Component {
  render() {
    return (
      <div className="view note-list">
        {this.props.notes.map(note => (
          <Link to={`/${note._id}`} key={note._id}>
            <Note
              id={note._id}
              title={note.title}
              content={note.textBody}
              tags={note.tags}
            />
          </Link>
        ))}
      </div>
    );
  }
}

export default ListNotes;
