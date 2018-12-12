import React from "react";
import NoteCard from "./NoteCard";
import SearchBar from "./SearchBar";

const NoteList = props => {
  return (
    <div className="note-card-container">
      <div className="notes-header">
        <div>
          <SearchBar
            searchFilterHandler={props.searchFilterHandler}
            searchTerm={props.searchTerm}
            searchFilter={props.searchFilter}
          />
        </div>
        <h3>Your Notes</h3>
      </div>
      {props.notes.map(note => {
        return <NoteCard key={note.id} deleteNote={props.deleteNote} note={note} editNote={props.editNote} />;
      })}
    </div>
  );
};

export default NoteList;
