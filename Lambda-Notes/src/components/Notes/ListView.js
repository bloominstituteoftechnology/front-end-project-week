import React, { Component } from 'react';
import Note from './Note';
import axios from 'axios';

export default class NoteList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: []
    };
  }
  render() {
    return (
      <div>
        <h1 className="noteList__title">Your Notes:</h1>
        {this.props.notes.map(note => (
          <div>
            <Note className="noteList" key={note.id} note={note} />
          </div>
        ))}
      </div>
    );
  }
}
