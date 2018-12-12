import React, { Component } from 'react'
import NewNote from './NewNote/index';
import { connect } from 'react-redux';
import marked from 'marked';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import NotePreview from '../NotePreview/index';
import { addNewNote, previewNewNote } from './actions/index';
import ModalAdd from './ModalAdd/index';

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

    this.state = {
      addNote: {
        save: false,
        modalOpen: false,
      }
    }

    this.handleSave = this.handleSave.bind(this);
    this.handlePreview = this.handlePreview.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  handleSave(title, text, tags) {
    this.props.addNewNote(title, text, tags);
  }

  handlePreview(title, text, tags) {
    this.props.previewNewNote(title, text, tags);
  }

  openModal() {
    this.setState({ addNote: { modalOpen: true }});
  }

  closeModal() {
    this.setState({ addNote: { modalOpen: false }})
  }

  render() {


    return (
      <div style={styles.addNote}>
        <NewNote openModal={this.openModal} handleSave={this.handleSave} handlePreview={this.handlePreview} title={this.props.title} text={this.props.text} />
        <ModalAdd closeModal={this.closeModal} open={this.state.addNote.modalOpen} />
      </div>
    );
  }
}

const mapStateToProps = state=> {
  return {
    title: state.newNote.title,
    text: state.newNote.text,
    tags: state.newNote.tags,
  };
}

const mapDispatchToProps = dispatch => {
  return {
    addNewNote: (title, text, tags) => {
      dispatch(addNewNote(title, text, tags));
    },
    previewNewNote: (title, text) => {
      dispatch(previewNewNote(title, text));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddNote);
