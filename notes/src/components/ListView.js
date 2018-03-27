import React from 'react';
import NoteCard from './NoteCard'
import './ListView.css';

const ListView = () => (
  <div className="listContainer">
    <h2 className="listHeader">Your Notes:</h2>
    <div className="listBody">
      <NoteCard />
      <NoteCard />
      <NoteCard />
      <NoteCard />
      <NoteCard />
      <NoteCard />
      <NoteCard />
      <NoteCard />
      <NoteCard />
    </div>
  </div>
);

export default ListView;
