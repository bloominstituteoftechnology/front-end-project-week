import React from 'react';
import { connect } from 'react-redux';

import Note from './Note';

import './css/NotesList.css'

class NotesList extends React.Component {
  render() {
    return (
      <div className="notes-list">
        <h1 className="notes-header"> Your Notes: </h1>
        <ul className="notes">
        {this.props.notes.map((note, index) => {
          return <Note key={note.id} index={index} note={note} />;
        })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    notes: state.notes,
  };
};

export default connect(mapStateToProps, null)(NotesList);
