import React, { Component } from 'react';
import "../css/note.css"
import { connect } from 'react-redux';
import { viewNote } from '../actions';

class NoteView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      tags: '',
      title: '',
      textBody: '',
      id: '',
      selected: null,
    };
  }
  //"redux-logger": "^3.0.6",
  componentDidMount() {
    this.props.viewNote(this.props.id)
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <div className="note-view"> <div className="note-view-container">
        <div className="spacer"></div>
        <button className="edit-button" onClick={() => this.props.noteEdit(this.props.id)}>edit</button>
        <button className="delete-button" onClick={() => this.props.noteDelete(this.props.id)}>delete</button></div>
        <div className="note-name">{this.props.noteSelected.title}</div>
        <div className="note-body">{this.props.noteSelected.textBody}</div>
      </div>
    )
  };
}

const mapStateToProps = state => {
  //const { singleNoteReducer } = state;
  return {
    error: state.notesReducer.error,
    noteSelected: state.singleNoteReducer.noteSelected
  };
};

export default connect(mapStateToProps, {
  viewNote
})(NoteView);