import React, { Fragment } from 'react';
import { Note } from './Note';

export const NoteList = ({ notes }) => (
  <Fragment>
    <h2 className="App-title">Your Notes</h2>
    <div className="Notes">
      {notes.map((note, i) => <Note key={i} {...note} />)}
    </div>
  </Fragment>
);