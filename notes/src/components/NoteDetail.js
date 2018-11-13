import React from "react";

class NoteDetail extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const note = this.props.notes.find(
        note => this.props.match.params.id === `${note.id}`
      );
    return (
      <div className="note">
          <h3 className="note-title">{note.title}</h3>
          <p className="note-body">{note.body}</p>
      </div>
    );
  }
}

export default NoteDetail;
