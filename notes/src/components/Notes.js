import React from 'react';
import { Link } from 'react-router-dom';
import { SortableContainer, SortableElement } from 'react-sortable-hoc';
import Note from './Note'; 

const SortableNote = SortableElement(({ note, storeNote }) => {
  return (
    <li>
      <Link 
        onClick={(e) => storeNote(note)} 
        to={`/notes/${note.id}`}
      >
        <Note note={note} />
      </Link>
    </li>
  );
});

const SortableNotes = SortableContainer(({ notes, storeNote }) => {
  return (
    <ul className="notes">
      {notes.map((note, ind) => (
        <SortableNote 
          key={note.id} 
          index={ind}
          note={note} 
          storeNote={storeNote}
        />
      ))}
    </ul>
  );
});

const Notes = (props) => {
  return <SortableNotes {...props} />;
};

export default Notes;
