import React from "react";
import EditNoteForm from "./EditNoteForm";

const ListCard = props => {
  return (
    <div>
      <h4>{props.note.title}</h4>
      <p>{props.note.textBody}</p>
      <button
        onClick={e => {
          props.deleteNote(e, props.note._id);
        }}
      >
        Delete
      </button>
      <EditNoteForm editNote={props.editNote} id={props.note._id} />
    </div>
  );
};

export default ListCard;
