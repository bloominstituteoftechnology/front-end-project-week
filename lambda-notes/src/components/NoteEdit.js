import React from 'react';


const NoteEdit = props => {
  const note = props.note.find(
    note => props.match.params.id === '${note._id}'
  );


}


export default NoteEdit;