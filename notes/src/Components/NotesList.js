import React from 'react';
import Note from './Note';
// import FilterNote from '../containers/FilterNote';

const NotesList = ({ notes }) => (
  <div className='notesList'>
  <h3>Your Notes:</h3>
    {notes.map(note =>
      <Note
        key={note.id}
        {...note}
        onClick={() => console.log(note.id, {...note})}
        // onClick={() => <FilterLink filter={filter.FILTER_NOTE} />}
      />
    )}
  </div>
);

export default NotesList;