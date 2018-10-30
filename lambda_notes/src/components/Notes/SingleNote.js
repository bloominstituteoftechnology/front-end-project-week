import React from 'react';

const SingleNote = props => {
  return (
    <div>
      <div>
        <button type="submit">Edit</button>
        <button type="button" onClick={(e) => props.deleteNote(e, props.note._id)}>Delete</button>
      </div>

      <h2>{props.note.title}</h2>
      <p>{props.note.textBody}</p>
    </div>
  );
}

export default SingleNote;
