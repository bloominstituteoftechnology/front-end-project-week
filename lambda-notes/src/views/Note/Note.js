import React from 'react';
import NoteDetails from '../../components/NoteDetails';

const Note = props => {
  return (
    <React.Fragment>
      <NoteDetails noteId={props.match.params.id} />
    </React.Fragment>
  );
}

export default Note;