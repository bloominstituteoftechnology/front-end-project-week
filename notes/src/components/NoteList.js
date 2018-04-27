import React from 'react';

const NoteList = props => {
  const remove = obj => {
    props.removeNote(obj.id);
  };
  // console.log(props);
  return (
    
    <div>
      {props.noteList.map(note => {
        return (
          <div key={note.title + note.id}>
            {note.title}
            <button
              onClick={() => {
                remove(note);
              }}
            >
              Remove
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default NoteList;