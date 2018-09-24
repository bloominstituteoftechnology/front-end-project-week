import React from 'react';
import { Link } from "react-router-dom";
import Note from './Note';
import SearchBar from './Searchbar';

  const NotesList = (props) => {
  return (
    <div
    style={
      props.data.length < 7 ? { height: "100vh" } : null
    }>
      <div className="notes-list">
        <SearchBar
          onInputChange = {props.onInputChange}
          searchTerm = {props.searchTerm}
        />
        <h2>Your Notes:</h2>
        {props.data.map(note => (
          <Link to={`/notes/${note.id}`} key={note.id}>
          <Note note={note}/>
          </Link>
        ))}
      </div>
    </div>
    )
}

export default NotesList;