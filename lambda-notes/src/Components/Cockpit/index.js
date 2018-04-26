import React, {Component} from 'react';
import classes from './index.css';
import {Route, Link} from 'react-router-dom';
import {NotesDisplay} from '../NotesDisplay/index';
import {NoteForm} from '../NoteForm';
import {Note} from '../Note';
import {store} from '../../';

export class Cockpit extends Component {
  getNote = (props) => {
    const note = store.getState().find((obj) => obj.id === props.match.params.id);
    return <Note {...note}/>
  }
  render() {
    return(
      <React.Fragment>
        <div className={classes.Container__SideBar}>
          <h2 className={classes.Container__Header}>Lambda Notes</h2>
          <Link to='/'><button>View your notes</button></Link>
          <Link to='/create-note'><button> + Create new note</button></Link>
        </div>
        <div className={classes.Container__MainContainer}>
          <Route exact path='/' component={NotesDisplay}/>
          <Route path='/notes/:id' render={(props) => this.getNote(props)} />
          <Route path='/create-note' component={NoteForm}/>
        </div>
      </React.Fragment>
    );
  }
}
