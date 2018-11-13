import React from 'react';
import NavBar from './NavBar';
import SingleNote from './SingleNote';
import { Link } from 'react-router-dom';
import DeleteModal from './DeleteModal';
import { connect } from 'react-redux';
import { toggleDeleteNote } from '../actions';

const NoteView = props => {


  return (
    <div className='note-view'>
      <NavBar />
      <div className='single-note-extended-container'>
        <div className='edit-view-container'>
        <Link to={`/note/edit/${props.note._id}`} className='edit-view'>
        edit
          </Link>
          <button 
            className='edit-view'
            onClick={props.toggleDeleteNote}>
          delete
          </button>
        </div>
        <ul>

          <SingleNote note={props.note}/>

        </ul>
      </div> 
      {props.deleteNote
        ? <DeleteModal note={props.note} />
        : undefined }
    </div>
  )
}

const mapStateToProps = state => {
  return {
    note: state.singleFlatNote.noteSelected,
    // error: state.singleFlatNote.error,
    // fetching: state.singleFlatNote.fetching,
    // showUpdate: state.singleFlatNote.showUpdate,
    deleteNote: state.singleFlatNote.deleteNote
  }
}

export default connect(
  mapStateToProps, {
    toggleDeleteNote,
  }
)(NoteView)

// export default NoteView;
// this.props if it is a class b/c state would be declared b/c instance
// props when it is a fn like here.