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
      <div className="note-tab" onClick={this.viewNote}>
      <div className="note-tab-header">{this.props.note.title}</div>
      <p className="note-tab-body">{this.props.note.textBody.length > 100 ? this.props.note.textBody.slice(0,100) + " (...)" : this.props.note.textBody}</p>
      </div>
    )
  }
}

export default NoteTab;
