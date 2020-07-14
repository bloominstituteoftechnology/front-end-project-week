import React from "react";
import { Link } from "react-router-dom";

const ListView = props => {
  return (
    <div>
      {props.noteList.map((notes, i) => {
        return (
          <Link to={`/notes/${notes._id}`}>
            <div key={i}>
              <div>{notes.tags}</div>
              <div>{notes.title}</div>
              <div>{notes.textBody}</div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default ListView;
