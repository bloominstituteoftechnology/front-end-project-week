import React, { Component } from 'react';

class Note extends Component {
  render() {
    return (
      <div style={{ display: "flex", flexDirection: "column", width: "150px", border: "1px solid rgb(166, 166, 166)", padding: "10px", margin: "10px", backgroundColor: "rgb(255, 255, 255)" }}>
        <h4>{this.props.note.title}</h4>
        <p>{this.props.note.body}</p>
      </div>
    )
  }
}

export default Note;