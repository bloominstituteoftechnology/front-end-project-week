import React from 'react';
import './Notes.css';

const UpdateNoteForm = props => {
  return (
    <div className="updateForm">
    <form>
      <input placeholder={props.note.title} />
      <input placeholder={props.note.date} />
      <input placeholder={props.note.notes} />
    </form>
    </div>
  );
};

export default UpdateNoteForm;