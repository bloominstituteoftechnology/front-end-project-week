import React from 'react';

import Note from './Note';

const NotesList =  props => {
  
    return (
      <React.Fragment>
        <ul>
          {props.notes.map(note => {
            return (
              <Note
                key={note._id}
                note={note}
              />
            );
          })}
        </ul>
      </React.Fragment>
    );
  
}

NotesList.defaultProps = {
 notes: [],
};

export default NotesList;