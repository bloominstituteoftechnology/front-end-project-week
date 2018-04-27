import React from 'react';
import classes from './index.css';
import {store} from '../../index';
import {Link} from 'react-router-dom';
import {Redirect} from 'react-router';

export const NotesDisplay = () => {
  let notes = <h1 className={classes.emptyList}>Your list appears to be empty...</h1>;

  if (store.getState().notes.length > 0){
    notes = (
      <React.Fragment>
        <h2 className={classes.header}>Your notes:</h2>
        <div className={classes.NotesContainer}>
          {store.getState().notes.map((note, i) => {
            return (
              <Link to={`/notes/${note.id}`} key={note.id}>
                <div className={classes.Note}>
                  <h2 className={classes.noteHeader}>{note.header}</h2>
                  <p>{note.body}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      {store.getState().loggedIn ? null : <Redirect to='/'/>}
      {notes}
    </React.Fragment>
  );
}
