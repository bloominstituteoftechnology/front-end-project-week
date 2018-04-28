import React, {Component} from 'react';
import classes from './index.css';
import {Route, Link} from 'react-router-dom';
import {NotesDisplay} from '../NotesDisplay/index';
import {NoteForm} from '../NoteForm';
import {Note} from '../Note';
import {store} from '../../';
import {LogIn} from '../Login';
import {Redirect} from 'react-router';

export class Cockpit extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: store.getState().loggedIn,
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.loggedIn !== store.getState().loggedIn) {
      this.setState({loggedIn: store.getState().loggedIn});
    }
  }
  getNote = (props) => {
    const note = store.getState().notes.find((obj) => obj.id === props.match.params.id);
    return <Note {...note}/>
  }
  render() {
    return(
      <React.Fragment>
        <Route exact path='/' render={() => this.state.loggedIn ? <Redirect to='/notes' /> : <LogIn/>}/>
        <div className={classes.Container__SideBar}>
          <h2 className={classes.Container__Header}>Lambda Notes</h2>
          <Link to='/'><button>View your notes</button></Link>
          <Link to='/create-note'><button> + Create new note</button></Link>
        </div>
        <div className={classes.Container__MainContainer}>
          <Route  exact path='/notes' component={NotesDisplay}/>
          <Route path='/notes/:id' render={(props) => this.getNote(props)} />
          <Route path='/create-note' component={NoteForm}/>
        </div>
      </React.Fragment>
    );
  }
}
