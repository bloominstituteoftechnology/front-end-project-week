import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CardColumns } from 'reactstrap';

import NoteCard from './NoteCard';

class YourNotes extends Component {
  render() {
    return (
      <div>
        <h1>Your Notes:</h1>
        <CardColumns>
          {this.props.notes.map(note => 
            <NoteCard key={note.id} title={note.title} text={note.text} />
          )}
        </CardColumns>
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