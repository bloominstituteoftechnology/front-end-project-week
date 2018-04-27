import React from "react";
import NoteCard from "./notecard";
import { SortableContainer } from "react-sortable-hoc";

const SortableList = SortableContainer(props => {
  return (
    <div className="notes-div">
      {props.notes.map((note, index) => (
        <NoteCard
          key={`note-${index}`}
          note={note}
          index={index}
          viewNote={props.viewNote}
        />
      ))}
    </div>
  );
});

const ListView = props => {
  if (props.notes.length === 0) {
    return (
      <div className="right-div">
        <h3 className="notes-h3">Your Notes:</h3>
        <div className="notes-div">
          <h3>
            You don't have any notes, click "Create New Note" to add some!
          </h3>
        </div>
      </div>
    );
  } //if empty list
  return (
    <div className="right-div">
      <h3 className="notes-h3">Your Notes:</h3>
      <SortableList
        distance="10"
        notes={props.notes}
        onSortEnd={props.onSortEnd}
        axis="xy"
        viewNote={props.viewNote}
      />
    </div>
  ); //else
};

export default ListView;
