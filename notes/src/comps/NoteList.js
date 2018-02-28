import React from 'react';
import NoteThumb from './NoteThumb';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectNote } from '../actions';
import '../styles/NoteList.css';

// props include the list of notes from App.js
const NoteList = props => {
  return (
    <div className="noteList__container">
      <h1 className="notesList__header">Your Notes:</h1>
      <div className="noteList">
        {props.notes.map(note => {
          return (
            <div key={note.id} className="notelist__item">
              <Link to={`/view/${note.id}`} onClick={() => props.selectNote(note.id)}>
                <NoteThumb note={note} />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    notes: state.notes,
  };
};

export default connect(mapStateToProps,{ selectNote })(NoteList);
