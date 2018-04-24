import React from 'react';
import {store} from '../../index';
export const NotesDisplay = () => {
  let notes = null;
  if (store.getState().length > 0){
    notes = (
      <div >
        {store.getState().map((note, i) => {
          return (
            <div key={note.id}>{note.header}</div>
          );
        })}
      </div>
    );
  }
  return (
    <h1>Your notes:</h1>
    
  );
}
