import React from "react";
import NoteCard from "./notecard";

const ListView = props => {
  if (props.notes.length === 0) {
    return (
      <div className="listview-div">
        <h3 className="notes-h3">Your Notes:</h3>
        <div className="notes-div">
          <h1>List is empty</h1>
        </div>
      </div>
    );
  } //if empty list
  return (
    <div className="listview-div">
      <h3 className="notes-h3">Your Notes:</h3>
      <div className="notes-div">
        {props.notes.map(note => <NoteCard key={note} note={note} />)}
      </div>
    </div>
  ); //else
};

export default ListView;
