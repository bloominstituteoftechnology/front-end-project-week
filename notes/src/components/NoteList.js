import React from 'react';
import { connect } from 'react-redux';
import NoteBox from './NoteBox';
import { Link, withRouter } from 'react-router-dom';

const NoteList = props => {
  return(
    <div className="notes-list">
      <p>Your Notes: </p>
      {props.notes.map(note=><Link to={`/note/${note.id}`}><NoteBox key={note.id} {...note} /></Link>)}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    notes: state.posts
  }
}

export default withRouter(connect(mapStateToProps)(NoteList));
