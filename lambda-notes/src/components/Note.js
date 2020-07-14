import React from 'react';
import { connect } from 'react-redux';

import { view_note } from '../actions/index';

import './css/Note.css';

class Note extends React.Component {
  render() {
    return (
      <div draggable="true" className="note" onClick={this.handleNote}>
        <h1 className="note-date">{this.props.note.dateString}</h1>
        <br />
        <h1>{this.props.note.title}</h1>
        <hr />
        <p>{this.props.note.body}</p>
      </div>
    );
  }
  handleNote = () => {
    this.props.view_note(this.props.note);
  };
}

export default connect(null, { view_note })(Note);
