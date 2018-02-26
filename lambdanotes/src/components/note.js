import React, { Component } from 'react';

class Note extends Component {
  render() {
    return (
      <div style={{ display: "flex", flexDirection: "column", width: "150px", border: "2px solid purple", padding: "10px"}}>
        <h4>{this.props.note.title}</h4>
        <p>{this.props.note.body}</p>
      </div>
    )
  }
}

export default Note;