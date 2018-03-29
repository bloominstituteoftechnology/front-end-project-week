import React, { Component } from 'react';
import notestyles from './notestyles.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class NotesPage extends Component {
  render() {
    return (
      <div className="container">
        <h3>Your Notes:</h3>
        <div>
          {this.props.notes.map(note => {
            return (
              <Link to={`FullNote/${note.id}`}>
                <div className="note" key={note.id}>
                  <div>{note.title}</div>
                  <p className="note-text">{note.text}</p>
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
    notes: state.notes
  };
};

export default connect(mapStateToProps)(NotesPage);
