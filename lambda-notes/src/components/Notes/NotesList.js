import React from 'react';

import Note from './Note';

const NotesList = props => {
  return (
    <div>
      <div>
        <h3>Your Notes:</h3>
      </div>
      <div>
        {props.notes.map((note, id) => {
          return <Note key={id} note={note} />
        })}
      </div>
    </div>
  );
}

NotesList.defaultProps = {
  Notes: [],
};

export default NotesList;
