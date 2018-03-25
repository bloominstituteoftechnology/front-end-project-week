import React, { Component } from 'react';
import { connect } from 'react-redux';

import NoteCard from './NoteCard';

class YourNotes extends Component {
  render() {
    return (
      <div>
        <h1>Your Notes:</h1>
        {this.props.notes.map(note => 
          <NoteCard key={note.id} title={note.title} text={note.text} />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    notes: state.notes,
  };
};

export default connect(mapStateToProps)(YourNotes);