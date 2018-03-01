import React, { Component } from 'react';
import { connect } from 'react-redux';
import notes from '../../data/notes';
import Note from '../note/note';
// import actions

class LambdaNotes extends Component {
  render() {
    return (
      <div className="lambda-notes">
        <h1>Your Notes:</h1>
        <ul>
          {notes.map(note => {
            return (
              <Note />
            )
          })}
        </ul>
      </div>
    );
  }
}

export default LambdaNotes;
