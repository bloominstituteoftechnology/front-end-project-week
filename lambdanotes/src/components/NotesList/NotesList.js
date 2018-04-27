import React, { Component } from "react";

import Note from "../Note/Note.js";

export default class NotesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: []
    };
  }

  render() {
    return (
      <div className='notesList__background'>
        <h4 className="notesList__title">Your Notes:</h4>

        <div className="notesList__list">
          {this.props.notes.map(note => (
            <div className="notesList__notes">
              <Note key={note.id} note={note} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}
