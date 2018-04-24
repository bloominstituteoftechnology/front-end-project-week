import React from 'react';
import {aux} from '../HOC/Aux';
import classes from './index.css';
export const Note = (note) => {
  return (
    <aux>
      <div className={classes.buttonContainer}>
        <button>edit</button>
        <button>delete</button>
      </div>
      <h2 className={classes.header}>{note.header}</h2>
      <p>{note.body}</p>
    </aux>
  );
}
