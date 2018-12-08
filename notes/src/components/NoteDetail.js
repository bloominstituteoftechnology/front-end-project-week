import React from 'react';

const NoteDetail = (props) => {
  const note = props.note;
  return (
    <div className="note-detail">
      <div>
        <div
          onClick={() => {
            props.deleteNote(note._id);
            props.history.push('/');
          }}
        >
          Delete
        </div>
        <div
          onClick={() => {
            props.history.push(`/notes/edit/${note._id}`);
          }}
        >
          Edit
        </div>
      </div>
      <div>
        <h1>{note.title}</h1>
        <p>{note.textBody}</p>
      </div>
    </div>
  );
}
 
export default NoteDetail;