import React, { Component } from 'react';

import Note from './note';

export default class NotesList extends Component {

  render() {
    return (
      <div>
        <br /><br />
        <h3>Your Notes:</h3><br />
        <div className="note-list">
          { this.props.cards.map( (card, i) => <Note key={i} { ...card } { ...this.props } /> ) }
        </div>
      </div>
    );
  }

}
