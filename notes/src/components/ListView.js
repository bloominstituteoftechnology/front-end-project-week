import React from "react";

import "./ListView.css";

const ListView = props => {
  return (
    <div className="note-container">
      <h5 className="list-header">Your Notes: </h5>
      {props.notes.map(notes => (
          <div key={notes.id}>{props.notes.id}</div>
      ))}
    </div>
  );
};

export default ListView;
