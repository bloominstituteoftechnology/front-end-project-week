import React, { Component } from 'react';

import Note from './note';

export default class NotesList extends Component {

  render() {
    return (
      <div>
        <br /><br />
        <h3>Your Notes:</h3><br />
        <div className="note-list">
          { this.props.notes.map( (note, i) => <Note key={i} { ...note } { ...this.props } /> ) }
        </div>
      </div>
    );
  }

}
