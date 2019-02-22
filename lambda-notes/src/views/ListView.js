import React from 'react';
import { connect } from 'react-redux';
import { Sidebar, NotesList } from '../components';
import { fetchNotes, addNote, deleteNote } from '../actions';

class ListView extends React.Component {


  componentDidMount() {
    this.props.fetchNotes();
  }

  render() {
    return(
      <div className='container'>
      <Sidebar notes={this.props.notes}/>
      {this.props.fetchingNotes ? <div className='loading'>
        <h1>Getting notes...</h1>
      </div> : <NotesList notes={this.props.notes}
      sortHelper={this.props.sortHelper}
      titleAsc={this.props.titleAsc}
      titleDes={this.props.titleDes}
      lengthAsc={this.props.lengthAsc}
      lengthDes={this.props.lengthDes}/>}

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
    loggedIn: state.authReducer.loggedIn
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
