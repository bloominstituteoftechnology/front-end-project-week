import React from "react";
import NoteCard from "./notecard";

const ListView = props => {
  return (
    <div className="listview-div">
      <h3 className="notes-h3">Your Notes:</h3>
      <div className="notes-div">
        <NoteCard />
        <NoteCard />
        <NoteCard />
        <NoteCard />
      </div>
    </div>
  );
};

export default ListView;
