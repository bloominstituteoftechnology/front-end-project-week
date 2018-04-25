import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import '../styles/ViewNotes.css';

class ViewNotes extends Component {
  render() {
    return (
      <div className="container">

        <div className="viewNotesBody">
          <div className="header">Your Notes:</div>
          <div className="allNotes">
            {this.props.notes.map((note, i) => {
              return (
                <div className="noteCard" key={note.id}>
                  <Link to={`/view-note/${note.id}`}>
                    <div className="noteTitle">{note.title}</div>
                    <div className="noteBody">{note.body}</div>
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

export default connect(mapStateToProps, null)(ViewNotes);