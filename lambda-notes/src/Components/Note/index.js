import React, {Component} from 'react';
import {aux} from '../HOC/Aux';
import classes from './index.css';
import {store} from '../../';
import {updateNote, deleteNote} from '../../Actions/NoteActions';

export class Note extends Component {
  constructor(props){
    super(props);
    this.state = {
      showForm: false,
      header: this.props.header,
      body: this.props.body,
    };
  }
  updateNote = () => {
    const update = {header: this.state.header, body: this.state.body};
    if (this.state.header === '') {
      update.header = this.props.header;
    } else if( this.state.body === '') {
      update.body = this.props.body;
    }
    store.dispatch(updateNote(this.props.id, update));
    this.setState({header: '', body: ''});
  }
  deleteNote = () => {
    store.dispatch(deleteNote(this.props.id));
  }
  changeState =  (e) => this.setState({[e.target.name]: e.target.value});
  render() {
    let form = null;
    let note = (
      <React.Fragment>
        <div className={classes.buttonContainer}>
          <button  onClick={() => this.setState({showForm: !this.state.showForm})} className={classes.marginOne}>Edit</button>
          <button onClick={this.deleteNote}>Delete</button>
        </div>
        <h2 className={classes.header}>{this.props.header}</h2>
        <p className={classes.body}>{this.props.body}</p>
      </React.Fragment>
    );
    if (this.state.showForm === true) {
      form = (
        <div className={classes.formContainer}>
          <h2 className={classes.Container__Header}>Edit Note:</h2>
          <input
            className={classes.Container__input}
            name='header'
            value={this.state.header}
            onChange={this.changeState}
            placeholder='Note Title'
          />
          <textarea
            className={classes.Container__inputBody}
            name='body'
            value={this.state.body}
            onChange={this.changeState}
            placeholder='Note Content'
          />
          <button className={classes.submitButton} onClick={this.updateNote}>Update</button>
        </div>
      );
      note = null;
    }
    return (
      <aux>
        {note}
        {form}
      </aux>
    );
  }
}
