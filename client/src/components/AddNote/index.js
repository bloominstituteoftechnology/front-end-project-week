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

  handleSave() {
    
  }

  handlePreview(title, text) {
    this.props.previewNewNote(title, text);
  }

  render() {

    return (
      <div style={styles.addNote}>
        <NewNote handleSave={this.handleSave} handlePreview={this.handlePreview} />
      </div>
    );
  }
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

export default connect(null, mapDispatchToProps)(AddNote);
