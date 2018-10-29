import React, { Component } from 'react';
import axios from 'axios';
import '../App.css';

class NoteList extends Component {
  constructor() {
    super()
      this.state = {
        notes: [
          {tags: [],
           title: 'this is the note title',
           textBody: 'this is the text body',
           id: 'abcdefg',
          }
        ]
      }
  }

  componentDidMount() {
    //axios stuff here

  }

  render() {
    return (
      <div className="App">
      {this.state.notes.map(note => (
            <div key={note.id}>
              <h3>{note.title}</h3>
              <p>{note.textBody}</p>
            </div>
            ))}

      </div>
    );
  }
}

export default NoteList;
