import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './AllNotes.css';

class AllNotes extends Component {
  render() {
    return (
      <div className="all-notes_body">
        <div className="all-notes_header">Your Notes:</div>
        <div className="all-notes_notes">
          {this.props.notes.map(eachNote => {
            return (
              <div className="note-box" key={eachNote.id}>
                <Link to={`/notes/${eachNote.id}`}>
                  <div className="note-title">{eachNote.title}</div>
                  <div className="note-body">{eachNote.body}</div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    notes: state.notes,
  };
};

export default connect(mapStateToProps, null)(AllNotes);
