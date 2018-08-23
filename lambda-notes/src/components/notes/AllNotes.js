import React, { Component } from "react";
import { Link } from "react-router-dom";

import "../../css/allnotes.css";

class AllNotes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allNotes: props.notes
    };
  }
  componentDidUpdate(prevProps) {
    if (this.props.notes.length !== prevProps.notes.length) {
      this.setState({ allNotes: this.props.notes });
    }
  }

  render() {
    return (
      <div className="mainNotesPageDiv">
        <h2 className="yourNotesTitle">Your Notes:</h2>
        <div className="allNotesDiv">
          {this.state.allNotes.map(note => {
            {
              console.log("Note Title", note.title);
            }
            {
              if (note.description.length > 5) {
                note.description = note.description.substring(0, 5) + "...";
              } else {
                note.description = note.description;
              }
            }
            return (
              <Link to={`/notes/${note.id}`} className="noteCard" key={note.id}>
                <h2>{note.title}</h2>
                <div className="noteDescription">
                  <p>{note.description}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    );
  }
}

export default AllNotes;
