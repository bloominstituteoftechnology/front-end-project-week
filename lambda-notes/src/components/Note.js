import React from 'react';
import { connect } from 'react-redux';

import { view_note } from '../actions/index';

import './css/Note.css';

class Note extends React.Component {
  render() {
    let body = '';
    this.props.note.body.length > 155
      ? (body = this.props.note.body.substr(0, 155).concat('...'))
      : (body = this.props.note.body);
    return (
      <div className="note" onClick={this.handleNote}>
        <h1>{this.props.note.title}</h1>
        <hr />
        <p>{body}</p>
      </div>
    );
  }
  handleNote = () => {
    this.props.view_note(this.props.note);
  };
}

export default connect(null, { view_note })(Note);
