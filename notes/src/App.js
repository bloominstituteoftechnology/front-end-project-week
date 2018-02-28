import React, { Component } from 'react';
import uuid from 'uuid';

import Note from './Components/note';
import AddNote from './Components/AddNote';
import './App.css';


export default class App extends React.Component {
  nextId = 0;

  state = {

    name: '',
    data: '',
  };

/* 
  componentDidMount = () => {
    this.setState({ note: this.state})
  }; */

  //this.handleChange = this.handleChange.bind(this);
  //this.handleSubmit = this.handleSubmit.bind(this);
  handleInput = addNote => {
    const newNote = {
      id: this.nextID++,
      name: addNote.name,
      data: addNote.data,
    };
    const newNotes = [...this.state.notes, newNote]
  }

  getNextId = () => {
    let copyList = [...this.state.notes];
    const nextId = copyList.pop().id + 2;
    return nextId;
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  }
  /* handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
   */
  /*   this.setState({
      [name]: value
    });
  } */
  render() {

    return (

      <div>
        <button onClick={this.addNote}>+</button>

        <AddNote handleInput={this.handleInput} submitNote={this.AddNote} />
      </div>

    );
  }
}