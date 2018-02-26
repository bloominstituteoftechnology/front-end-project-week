import React from 'react';
import Notes from '../Notes/Notes';

const NotesList = (props) => {
  return (
  <div className="Notes-List">
    <Notes notes={props.notes} />
  </div>
  )
}


export default NotesList;