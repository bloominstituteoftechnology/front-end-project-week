import React, { Component } from 'react';

class NotesList extends Component {
  render() {
    return (
      <div className="NotesList-container" style={{ border: "2px solid blue", width: "100%" }}>
        <h1>Your Notes:</h1>
        Notes will appear here
      </div>
    )
  }
}

export default NotesList;