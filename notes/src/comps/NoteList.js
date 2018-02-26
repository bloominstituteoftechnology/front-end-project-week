import React from 'react';
import NoteThumb from './NoteThumb';
import { connect } from 'react-redux';

// props include the list of notes from App.js
const NoteList = props => {
  return (
    <div className="notelist__container">
      <ul className="notelist">
        {props.notes.map(note => {
          return (
            <li className="notelist__item">
              <NoteThumb note={note} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    notes: state.notes
  }
}

export default connect(mapStateToProps)(NoteList);
