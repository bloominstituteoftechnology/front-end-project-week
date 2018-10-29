import React from "react";

const ListView = props => {
  return (
    <div>
      {props.notes.map(note => {
        return <NoteCard note={note} />;
      })}
    </div>
  );
};

export default ListView;
