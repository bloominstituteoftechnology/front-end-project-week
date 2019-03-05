import React from 'react';
import './Notes.css';

const UpdateNoteForm = props => {
  return (
    <div className="updateForm">
    <form>
      <input placeholder={props.note.tags} />
      <input placeholder={props.note._id} />
      <input placeholder={props.note.title} />
      <input placeholder={props.note.textBody} />
    </form>
    </div>
  );
};

export default UpdateNoteForm;