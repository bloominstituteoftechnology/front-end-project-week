import React from "react";

class Note extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="note">
        <h3 className="note-title">{this.props.note.title}</h3>
        <p className='note-body'>{this.props.note.body}</p>
      </div>
    );
  }
}

export default Note;
