import React from "react";

class NoteDetail extends React.Component {
  render() {
    console.log(this.props.notes);
    const note = this.props.notes.find(
      note => this.props.match.params.id === `${note._id}`
    );
    return (
      <div className="note">
        <h4 className="note-tag">{note.tags.map(tag => `${tag} `)}</h4>
        <h3 className="note-title">{note.title}</h3>
        <p className="note-body">{note.textBody}</p>
      </div>
    );
  }
}

export default NoteDetail;
