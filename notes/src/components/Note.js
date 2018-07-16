import React from 'react';
import '../App.css';

class Note extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    }
  }

  render() {
    return (
      <div className="note">
      <div className="note-header">{this.props.note.title}</div>
      <p className="note-body">{this.props.note.body}</p>
      </div>
    )
  }
}

export default Note;
