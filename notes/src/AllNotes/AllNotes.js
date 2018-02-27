import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './AllNotes.css';

class AllNotes extends Component {
  render() {
    return (
      <div className="main-body">
        <div className="main-body_header">Your Notes:</div>
        <div className="main-body_notes">
          {this.props.notes.map((eachNote, i) => {
            return ( // Here, return a class which takes in the two values and returns <Link> and everything within it.
            
              //Maybe get the note title as the link instead,
              // javascript to shorten it and add dashes,
              // then dash note id at the end
              <Link to={`/notes/${eachNote.id}`} key={i}>
                <div className="note-box">
                  <div className="note-title">{eachNote.title}</div>
                  <div className="note-body">{eachNote.body}</div>
                </div>
              </Link>
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