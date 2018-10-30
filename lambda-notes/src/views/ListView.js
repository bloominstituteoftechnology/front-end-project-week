import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import {NotesData} from '../NotesData';
import { Sidebar, NotesList } from '../components';
import { fetchNotes, addNote, deleteNote } from '../actions';

class ListView extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     notes: [],
  //   }
  // }



  componentDidMount() {
    this.props.fetchNotes();

  }

  render() {
      if(this.props.notesSaved) {
        this.props.fetchNotes();
      }
    if (this.props.fetchingFriends) {
      return (
        <div className='loading'>
          <h1>Getting notes...</h1>
        </div>
      )
    }
    return(
      <div className='container'>
      <Sidebar />
      <NotesList notes={this.props.notes} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    notes: state.notesReducer.notes,
    fetchingNotes: state.notesReducer.fetchingNotes,
    error: state.notesReducer.error,
    deletingNote: state.notesReducer.deletingNote,
    notesSaved: state.notesReducer.notesSaved,
  }
}

export default connect(
  mapStateToProps,
  {
    fetchNotes,
    addNote,
    deleteNote,
  }
)(ListView);
