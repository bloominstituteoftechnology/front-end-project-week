import React from 'react';
import NoteThumb from './NoteThumb';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { CSVLink } from 'react-csv';
import { selectNote, sortNotes } from '../actions';
import '../styles/NoteList.css';

// props include the list of notes from App.js
const NoteList = props => {
  return (
    <div className="noteList__container">
      <h1 className="notesList__header">Your Notes:</h1>
      <CSVLink
        data={props.notes}
        filename={'my-notes.csv'}
        className="noteList__download"
      >
        download
      </CSVLink>
      <div>sort by:</div>
      <div onClick={() => props.sortNotes('id')}>date</div>
      <div onClick={() => props.sortNotes('title')}>name</div>
      <div className="noteList">
        {props.notes.map(note => {
          return (
            <div key={note.id} className="notelist__item">
              <Link
                to={`/view/${note.id}`}
                onClick={() => props.selectNote(note.id)}
              >
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

export default connect(mapStateToProps, { selectNote, sortNotes })(NoteList);
