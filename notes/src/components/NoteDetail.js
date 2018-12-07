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
          <span>Edit</span> <span>Delete</span>
        </div>
        <div>
          <h1>{note.title}</h1>
          <p>{note.textBody}</p>
        </div>
      </div>
  );
}
 
export default NoteDetail;