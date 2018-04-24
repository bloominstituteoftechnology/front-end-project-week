import React from 'react';
import classes from './index.css';
import {Route, Link} from 'react-router-dom';
import {NotesDisplay} from '../NotesDisplay/index';
export const Cockpit = () => {
  return(
    <React.Fragment>
      <div className={classes.Container__SideBar}>
        <h2 className={classes.Container__Header}>Lambda Notes</h2>
        <Link to='/'><button>View your notes</button></Link>
        <Link to='/create-note'><button> + Create new note</button></Link>
      </div>
      <div className={classes.Container__MainContainer}>
        <Route exact path='/' component={NotesDisplay}/>
      </div>
    </React.Fragment>
  );
}
