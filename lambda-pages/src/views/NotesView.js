import React, { Component } from 'react';

import Notes from '../components/Notes';

// dummy data
import notesData from '../notes';

class NotesView extends Component {
  state = {
    notes: []
  };
  componentDidMount() {
    this.setState({ notes: notesData });
  }
  render() {
    return (
      <div className="View NoteView">
        <h2>Your Notes:</h2>
        <Notes notes={this.state.notes} />
      </div>
    );
  }
}

export default NotesView;
