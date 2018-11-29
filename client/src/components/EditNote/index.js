import React, { Component } from 'react'
import Note from './Note/index';
import { connect } from 'react-redux';
import marked from 'marked';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import NotePreview from '../NotePreview/index';
import { previewEditNote, editNote } from './actions/index';
import ModalAdd from './ModalAdd/index';

const styles = {
  addNote: {
    margin: '100px auto 0 auto',
    // border: '1px solid black',
    width: '60vw',
  }
}

class EditNote extends Component {
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

  handleSave(title, text, id) {
    this.props.editNote(title, text, id);
  }

  handlePreview(title, text, id) {
    this.props.previewEditNote(title, text, id);
  }

  openModal() {
    this.setState({ addNote: { modalOpen: true }});
  }

  closeModal() {
    this.setState({ addNote: { modalOpen: false }})
  }

  componentDidMount() {

  }

  render() {



    const getNote = id => {



      const notes = this.props.notes;

      if (this.props.title.length > 0 && this.props.text.length > 0) {
        return {
          title: this.props.title,
          textBody: this.props.text,
        }
      }

        for (let i in notes) {
          if (notes[i]._id === id) {
            return notes[i];
          }
        }
    }

    const note = getNote(this.props.id);


    return (
      <div style={styles.addNote}>
        <Note id={this.props.id} openModal={this.openModal} handleSave={this.handleSave} handlePreview={this.handlePreview} title={note.title} text={note.textBody} />
        <ModalAdd closeModal={this.closeModal} open={this.state.addNote.modalOpen} />
      </div>
    );
  }
}

const mapStateToProps = state=> {
  return {
    title: state.editNote.title,
    text: state.editNote.text,
    notes: state.notes,
  };
}

const mapDispatchToProps = dispatch => {
  return {
    // addNewNote: (title, text) => {
      // dispatch(addNewNote(title, text));
    // },
    previewEditNote: (title, text, id) => {
      dispatch(previewEditNote(title, text, id));
    },
    editNote: (title, text, id) => {
      dispatch(editNote(title, text, id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditNote);
