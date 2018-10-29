import React from 'react';
import { connect } from 'react-redux';
import {
  fetchNoteById,
} from '../actions';
import { Note, Sidebar } from '../components';

class NoteView extends React.Component {

  componentDidMount() {
    const noteId = this.props.match.params.id;
    this.props.fetchNoteById(noteId); 

  }
  render() {
    console.log(this.props)
    return(
      <div className='container'>
        <Sidebar />
        <Note note={this.props.note} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return{
    note: state.noteReducer.note,
    error: state.noteReducer.error,
    fetchingNote: state.noteReducer.fetchingNote,
  }
}


export default connect(
  mapStateToProps,
  {
    fetchNoteById,
  }
)(NoteView);
