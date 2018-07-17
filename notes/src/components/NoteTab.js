import React from 'react';
import '../App.css';

class NoteTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    }
  }

  render() {
    return (
      <div id="note-tabz" onClick={this.viewNote}>
      <div id="note-tab-header">{this.props.note.title}</div>
      <p id="note-tab-body">{this.props.note.textBody.length > 55 ? this.props.note.textBody.slice(0,55) + " (...)" : this.props.note.textBody}</p>
      </div>
    )
  }
}

export default NoteTab;
