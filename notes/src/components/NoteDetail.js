import React from 'react';

const NoteDetail = (props) => {
  const note = props.notes.find(
    note => note.id === props.match.params.id
  )
  return (
    !note ? 
      <div>Cannot Find Friend</div> : 
      <div className="note-detail">
        <div>
          <div
            onClick={() => {
              props.deleteNote(note.id);
              props.history.push('/');
            }}
          >
            Delete
          </div>
          <div
            onClick={() => {
              props.history.push(`/notes/edit/${note.id}`);
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