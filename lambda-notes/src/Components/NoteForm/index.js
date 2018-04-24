import React, {Component} from 'react';
import classes from './index.css';
import {addNote} from '../../Actions/NoteActions';
import {store} from '../../';
import uuid from 'uuid/v4';
export class NoteForm extends Component {
  constructor() {
    super();
    this.state={
      header: '',
      body: '',
    };
  }
  newNote = () => {
    const note = {id: uuid(),header: this.state.header, body: this.state.body};
    store.dispatch(addNote(note));
    this.setState({header: '', body: ''});
  }
  changeState = (e) => {
    this.setState({[e.target.name]: e.target.value});
  };
  render() {
    return (
      <div className={classes.Container}>
        <h2 className={classes.Container__Header}>Create new note:</h2>
        <input
          className={classes.Container__input}
          name = 'header'
          value={this.state.header}
          onChange={this.changeState}
          placeholder='Note Title'
        />
        <textarea
          className={classes.Container__inputBody}
          name = 'body'
          value={this.state.body}
          onChange={this.changeState}
          placeholder='Note Content'
        />
        <button className={classes.submitButton} onClick={this.newNote}>Save</button>
      </div>
    );
  }
}
