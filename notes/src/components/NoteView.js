import React, { Component } from "react";

class NoteView extends Component {
  constructor() {
    super();
    this.state = {
      note: [{ title: "Note Title", content: "Note Content" }],
      id: null
    };
  }

  render() {
    return (
      <div className="note-view">
        <div className="change-links">
          <link>edit</link>
          <link>delete</link>
        </div>
        <div className="note-card">
          <h5>{this.state.note.title}</h5>
          <p>{this.state.note.content}</p>
        </div>
      </div>
    );
  }
}

export default NoteView;
