import React, { Component } from 'react';
import Note from './Note';
import { connect } from 'react-redux';
import './NoteGrid.css';

class NoteGrid extends Component {
  render() {
    return (
      <div>
        <h3>Your Notes</h3>
        <div className="row">
          {this.props.notes.map((note, i) => {
            return (
              <Note title={note.title} body={note.body} key={i} id={note.id} />
            );
          })}
        </div>
        {this.props.notes.length === 0 && (
          <div>
            <p>No notes here...</p>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    notes: state.notes,
    error: state.error,
  };
};

export default connect(mapStateToProps)(NoteGrid);
