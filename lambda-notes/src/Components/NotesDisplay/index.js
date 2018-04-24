import React from 'react';
import classes from './index.css';
import {store} from '../../index';
import {aux} from '../HOC/Aux';

export const NotesDisplay = () => {
  let notes = null;
  if (store.getState().length > 0){
    notes = (
      <div className={classes.NotesContainer}>
        {store.getState().map((note, i) => {
          return (
            <div className={classes.Note} key={note.id}>
              <h2>{note.header}</h2>
              <p>{note.body}</p>
            </div>
          );
        })}
      </div>
    );
  }
  return (
    <aux>
      <h1>Your notes:</h1>
      {notes}
    </aux>
  );
}
