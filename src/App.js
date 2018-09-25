import React from 'react';

const notes = [
  {
    id: '4e81fc6e-bfb6-419b-93e5-0242fb6f3f6a',
    title: 'Title',
    textBody: 'Body'
  },
  {
    id: '11bbffc8-5891-4b45-b9ea-5c99aadf870f',
    title: 'Title',
    textBody: 'Body'
  }
];

export default () => (
  <ul>{notes.map(note =>
    <li key={note.id}><h2>{note.title}</h2> <p>{note.textBody}</p></li>
  )}</ul>
)
