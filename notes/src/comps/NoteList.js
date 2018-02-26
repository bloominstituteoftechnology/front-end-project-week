import React from 'react';
import NoteThumb from './NoteThumb';
import { connect } from 'react-redux';
import '../styles/NoteList.css';

// props include the list of notes from App.js
const NoteList = props => {
  return (
    <div className="notelist">
      {props.notes.map(note => {
        return (
          <div className="notelist__item">
            <NoteThumb key={note.id} note={note} />
          </div>
        );
      })}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    notes: state.notes,
  };
};

export default connect(mapStateToProps)(NoteList);
