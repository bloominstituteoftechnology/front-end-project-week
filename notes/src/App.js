import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import NoteList from '../src/Components/NoteList';
import NoteForm from '../src/Components/NoteForm';
import NoteCard from '../src/Components/NoteCard';
import EditNote from '../src/Components/EditNote';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      notes: [],
    }
  }

  getNotes = event => {
    axios
      .get(`https://fe-notes.herokuapp.com/note/get/all`)
      .then(response => {
        this.setState({
          notes: response.data
        })
      })
      .catch(error => console.log('error!'))
  }

  componentDidMount() {
    this.getNotes()
  }

  newNote = note => {
    console.log('clicked')
    axios
      .post(`https://fe-notes.herokuapp.com/note/create`, note)
      .then(response => {
        this.getNotes()
      })
      .catch(error => console.log('error!'))
  }

  updateNote = (note) => {
    axios
      .put(`https://fe-notes.herokuapp.com/note/edit/${note.id}`, note)
      .then(response => {
        this.getNotes()
      })
      .catch(error => console.log('error!'))
  }

  render() {
    return (
      <div className="App">
        <Route exact path='/' render={props => (
          <NoteList
            {...props}
            notes={this.state.notes}
          />
        )} />
        <Route exact path='/notes/form' render={props => (
          <NoteForm
            {...props}
            newNote={this.newNote}
          />
        )} />
        <Route exact path='/:id' render={props => (
          <NoteCard
            {...props}
            notes={this.state.notes}
          />
        )} />
        <Route exact path='/:id/edit' render={props => (
          <EditNote
            {...props}
            updateNote={this.updateNote}
          />
        )} />
      </div>
    );
  }
}

export default App;
