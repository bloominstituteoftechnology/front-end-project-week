import React, { Component } from 'react';
import dummyData from '../dummy-data';

class NotesList extends Component {
  state = {
    notes: [...dummyData],
    test: true,
  }

  componentDidMount() {
    console.log(this.state);
  }

  render() {
    return (
      <div className="NotesList-container" style={{ border: "3px solid blue", width: "100%", padding: "10px" }}>
        <h1>Your Notes:</h1>
        Notes will appear here
        {this.state.notes.map((note) => {
          return <div key={note.id}>{note.title}</div>
        })}
      </div>
    )
  }
}

export default NotesList;