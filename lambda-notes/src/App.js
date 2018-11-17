import React, { Component } from 'react';
import {BrowserRouter as Router,Route, NavLink} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import NotesList from './Components/NotesList'
import NewNote from './Components/NewNote'
import NotesNav from './Components/NotesNav'

import axios from 'axios'
class App extends Component {
  constructor (props) {
    super(props);

    this.state = {
      notes: [],
      title: '',
      content: '',
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
    return (
      <div className="App" className='Main'>
        <NotesNav clickForAllHandler={this.clickForAllHandler} clickForNewHandler={this.clickForNewHandler} />
        <Route exact path="/home" render={(props) =>  <NotesList {...props} notes={this.state.notes} />} />
        <Route exact path="/new" render={(props) =>  <NewNote {...props} notes={this.state.notes} />} />
      </div>
    );
  }
}

export default App;
