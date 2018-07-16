import React from 'react';
import '../App.css';
import axios from 'axios';
import ViewNote from './ViewNote';

class NoteTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    }
  }

  render() {
    return (
      <div className="note-tab" onClick={this.viewNote}>
      <div className="note-tab-header">{this.props.note.title}</div>
      <p className="note-tab-body">{this.props.note.textBody.slice(0,100)}</p>
      </div>
    )
  }
}

export default NoteTab;
