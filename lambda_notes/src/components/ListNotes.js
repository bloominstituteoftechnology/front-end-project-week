import React from 'react';
import Note from './Notes';
import './Components.css';

const NotesList = props => (
    <div className="noteslist">
      <h2 className="list-heading">
        Your Notes:
        <input
        type="text" 
        name="searchTerm" 
        placeholder="Search" 
        onChange={props.handleInput} 
        onKeyDown={props.searchNote} 
        value={props.searchTerm} 
        className="searchbar"
        />
        </h2>
      <div className="notes">
        {props.notes.map((note, i) => (
          <Note note={note} key={i} />
        ))}
      </div>
    </div>
  );

export default NotesList;