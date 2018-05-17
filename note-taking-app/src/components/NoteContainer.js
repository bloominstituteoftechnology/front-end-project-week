import React, { Component } from 'react';

import Notes from './Notes';
import NoteForm from './NoteForm';
import Note from './Note';

class NoteContainer extends Component {
  render() {
    return (
      <div>
          <Notes />
          <NoteForm />
          <Note />
      </div>
    );
  }
}

export default NoteContainer;