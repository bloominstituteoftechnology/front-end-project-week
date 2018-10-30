// React imports
import React, { Component } from 'react';
// CSS imports
import '../views/NoteFormView.css';
// Component imports
import NoteForm from '../components/NoteForm';
// Actions imports
import { addNote } from '../actions';
// Redux imports
import { connect } from 'react-redux';

class NoteFormView extends Component {
  render() {
    return (
      <div className="noteFormView">
        <NoteForm addNote={this.props.addNote} />
      </div>
    );
  }
}

export default connect(
  null,
  { addNote }
)(NoteFormView);
