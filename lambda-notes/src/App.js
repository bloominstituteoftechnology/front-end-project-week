import React, { Component } from 'react';
import {BrowserRouter as Router,Route, NavLink} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import NotesList from './Components/NotesList'
import NewNote from './Components/NewNote'
import NotesNav from './Components/NotesNav'

import axios from 'axios'
class App extends Component {
  constructor () {
    super();

    this.state = {
      notes: [],
      allNotes: true,
      newNote: false,
      fullNote: false,
      updateNote: false,
      deleteNote: false,
  }
  }

  componentDidMount() {
    axios.get('https://fe-notes.herokuapp.com/note/get/all')
    .then(response => this.setState({notes: response.data}))
    .catch(err => console.log('There is a Note Error'))
}

  clickForNewHandler = () => {
    this.setState ({
      allNotes: false,
      newNote: true,
      fullNote: false,
      updateNote: false,
      deleteNote: false,})
  }

  clickForAllHandler = () => {
    this.setState ({
      allNotes: true,
      newNote: false,
      fullNote: false,
      updateNote: false,
      deleteNote: false,})
  }

  render() {
    let Comp;

    if (this.state.allNotes === true) {Comp = <NotesList notes={this.state.notes} />}
    if (this.state.newNote === true) {Comp = <NewNote />}
    return (
      <div className="App" className='Main'>
        <NotesNav clickForAllHandler={this.clickForAllHandler} clickForNewHandler={this.clickForNewHandler} />
        <Route exact path="/home" render={(props) =>  <NotesList notes={this.state.notes} />} />
        <Route exact path="/new" render={(props) =>  <NewNote />} />
      </div>
    );
  }
}

export default App;
