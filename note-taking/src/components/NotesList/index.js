import React from "react";

const NotesListItem = ({ notes }) => (
  <li key={notes.id}>
    Title: {notes.notetitle}
    <br />Body: {notes.notebody}
  </li>
);

const NotesList = props => {
  return (
    <div>
      <ul>
        {props.items.map(notes => (
          <NotesListItem notes={notes} key={notes.id} />
        ))}
      </ul>
    </div>
  );
};

export default NotesList;
