import React from 'react';

const NoteList = props => {
  if (!props.notes) {
    return (
      <div>Notes are loading...</div>
    )
  }
  return (
    <div>
      NoteList component
    </div>
  );
}

export default NoteList;
