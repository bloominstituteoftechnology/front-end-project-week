import React, { Component } from 'react'
import NewNote from './NewNote/index';
import { connect } from 'react-redux';
import marked from 'marked';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import NotePreview from '../NotePreview/index';
import { addNewNote, previewNewNote } from './actions/index';

const styles = {
  addNote: {
    margin: '100px auto 0 auto',
    // border: '1px solid black',
    width: '60vw',
  }
}

class AddNote extends Component {
  constructor(props) {
    super(props);

    this.handleSave = this.handleSave.bind(this);
    this.handlePreview = this.handlePreview.bind(this);
  }

  handleSave(title, text) {
    this.props.addNewNote(title, text);
  }

  handlePreview(title, text) {
    this.props.previewNewNote(title, text);
  }

  handleChange(title, text) {
  }

  render() {

    return (
      <div style={styles.addNote}>
        <NewNote handleSave={this.handleSave} handlePreview={this.handlePreview} title={this.props.title} text={this.props.text} />
      </div>
    );
  }
}

const mapStateToProps = state=> {
  return {
    title: state.newNote.title,
    text: state.newNote.text,
  };
}

const mapDispatchToProps = dispatch => {
  return {
    addNewNote: (title, text) => {
      dispatch(addNewNote(title, text));
    },
    previewNewNote: (title, text) => {
      dispatch(previewNewNote(title, text));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddNote);
