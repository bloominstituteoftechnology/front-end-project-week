import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom'
import './App.css';
import axios from 'axios';

import ListOfNotes from './components/ListofNotes';
import Note from './components/Note';
import AddNote from './components/AddNote';

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: [],
      title: '',
      textBody: '',
    }
  }

  componentDidMount() {
    axios
    .get('https://fe-notes.herokuapp.com/note/get/all')
    .then(response => {
      this.setState({
        notes: response.data
      })
    })
    .catch(err => {
      console.log(err);
    })
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  addNote = data => {
    axios
    .post('https://fe-notes.herokuapp.com/note/create', data)
    .then(response => {
      this.setState({
        notes: response.data,
        title: '',
        textBody: ''
      })
    })
    .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
      <section className="nav-section">
      <NavLink exact to={'/'}>Home</NavLink>
      <NavLink to={'/add-note'}>Add Note</NavLink>

      <Route path='/add-note' render={props => (
        <AddNote {...props} 
        state={this.state}
        handleChange={this.handleChange}
        addNote={this.addNote} />
      )}
      />

      </section>
      <section className="content-container">
      <Route exact path='/' render={props => (
        <ListOfNotes {...props}
        state={this.state} />
      )} />
      <Route path='/notes/:id'
      render={props => (
        <Note {...props} />
      )} />
      </section>
      </div>
    );
  }
}

export default App;
