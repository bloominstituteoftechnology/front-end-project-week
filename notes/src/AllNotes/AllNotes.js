import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import LeftBar from '../LeftBar/LeftBar';
import './AllNotes.css';

class AllNotes extends Component {
  render() {
    return (
      <div className="container">
        <LeftBar />
        <div className="all-notes_body">
          <div className="all-notes_header">Your Notes:</div>
          <div className="all-notes_notes">
            {this.props.notes.map(eachNote => {
              const charsVisible =
              eachNote.body.length < 120 ? eachNote.body : (eachNote.body.slice(0, 105) + '...');
              return (
                <div className="note-box" key={eachNote.id}>
                  <Link to={`/notes/${eachNote.id}`}>
                    <div className="note-title">{eachNote.title}</div>
                    <div className="note-body">{charsVisible}</div>
                  </Link>
                </div>
              );
            })}
          </div>
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
