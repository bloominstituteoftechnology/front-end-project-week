import React, { Component } from "react";

class Note extends Component {
  render() {
    console.log(this.props.notes);
    return (
      <div className="note-card">
        <h4>{this.props.notes.title}</h4>
        <hr />
        <p>{this.props.notes.text}</p>
      </div>
    );
  }
}

export default Note;
