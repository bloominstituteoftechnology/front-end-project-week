import React, { Component } from 'react';
import Note from './note';

class NotesList extends Component {

  componentDidMount() {
    console.log(this.props);
  }

  render() {
    return (
      <div className="NotesList-container" style={{ width: "100%", padding: "10px", backgroundColor: "rgb(243, 243, 243)" }}>
        <h1>Your Notes:</h1>
        <div style={{ display: "flex", flexFlow: "row wrap" }}>
          {this.props.notes.map((note) => {
            return (
              <Note key={note.id} note={note}/>
              )})}
        </div>
      </div>
    )
  }
}

export default NotesList;