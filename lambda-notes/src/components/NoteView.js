import React from "react";
import {Link} from "react-router-dom";

const NoteView = props => {
  const note = props.notes.find(
    note => `${note._id}` === props.match.params.id
  );
  console.log("Note View: ", note);
  //   console.log(props.notes);
  return (
    <div>
      <Link to="/edit">Edit</Link>
      <Link to="/delete">Delete</Link>
      <h2>{note.title}</h2>
      <p>{note.textBody}</p>
    </div>
  );
};

export default NoteView;
