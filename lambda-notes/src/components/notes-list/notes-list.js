import React, { Component } from 'react';
import { connect } from 'react-redux';
import notes from '../../data/notes';
// import actions

class LambdaNotes extends Component {
  render() {
    return (
      <div className="lambda-notes">
        <h1>Your Notes:</h1>
        <ul>
          {notes.map(note => {
            return (
              <div>
                <h3 key={note.id}>{note.title}</h3>
                <hr />
                <p>{note.content}</p>
              </div>
            )
          })}
        </ul>
      </div>
    );
  }
}

export default LambdaNotes;
