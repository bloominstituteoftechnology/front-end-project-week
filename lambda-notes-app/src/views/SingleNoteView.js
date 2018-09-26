import React from 'react';
import { connect } from 'react-redux';

import { fetchNotes, deleteNote, setUpdateNote } from '../store/actions';

import { Note } from '../components/SingleNote/Note';

class SingleNoteView extends React.Component {

  componentDidMount() {
    if (this.props.notesList.length === 0) {
      this.props.fetchNotes();
    }
  }

  handleDeleteNote = noteId => {
    // this.props.deleteNote(noteId)
    // make deleteNote inside actions
    console.log('firing inside handleDeleteNote', noteId);
    this.props.deleteNote(noteId);
  }

  goToUpdateNoteForm = (event, id) => {
    event.preventDefault();
    // this.props.setUpdateNote(id)
    // this.props.history.push('/note-form')
    console.log('firing inside setUpdateNote');
    this.props.setUpdateNote(id);
    this.props.history.push('/note-form')
    
  }

  render() {
    return (
      <Note
        {...this.props}
        notesList={this.props.notesList}
        handleDeleteNote={this.handleDeleteNote}
        goToUpdateNoteForm={this.goToUpdateNoteForm}
      />
    );
  }

}

const mapStateToProps = state => ({
  notesList: state.notes,  
})

// const mapDispatchToProps = dispatch => ({
//   deleteNoteOnProps: () => deleteNote(id),
// })

export default connect(mapStateToProps, { fetchNotes, deleteNote, setUpdateNote })(SingleNoteView);