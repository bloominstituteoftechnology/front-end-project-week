import React from "react";

const ListView = props => {
  return (
    <div>
      {props.notes.map(note => {
        return (
          <div>
            <p>{note.title}</p>
            <p>{note.textBody}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ListView;
