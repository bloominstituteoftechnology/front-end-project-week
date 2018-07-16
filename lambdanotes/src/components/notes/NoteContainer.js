import React from 'react';
import Notes from "./Notes"
const NoteContainer = ({props}) => (
  <main>
    <h2>
      Your Notes:
    </h2>
    <div className="notes-container">
      <Notes />
      <Notes />
      <Notes />
      <Notes />
      <Notes />
      <Notes />
      <Notes />
      <Notes />
      <Notes />
    </div>
  </main>
);

export default NoteContainer;
