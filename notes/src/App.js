import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import NoteList from '../src/Components/NoteList/NoteList';
import NoteForm from '../src/Components/NoteForm/NoteForm';
import NoteCard from '../src/Components/NoteCard/NoteCard';
import EditNote from '../src/Components/EditNote/EditNote';
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
      .get(`https://mitchellnotes-backend.herokuapp.com/api/notes`)
      .then(response => {
        // console.log('Data!', response)
        this.setState({
          notes: response.data
        })
        // console.log('Notes!', this.state.notes)
      })
      .catch(error => console.log('error!'))
  }

  componentDidMount() {
    this.getNotes()
  }

  newNote = note => {
    axios
      .post(`https://mitchellnotes-backend.herokuapp.com/api/notes`, note)
      .then(response => {
        this.getNotes()
        this.setState({ notes: response.data })
      })
      .catch(error => console.log('error!'))
  }

  updateNote = (updateNote) => {
    console.log('Clicked!')
    axios
      .put(`https://mitchellnotes-backend.herokuapp.com/api/notes/${updateNote.id}`, updateNote)
      .then(response => {
        this.getNotes()
        console.log('response', response)
      })
      .catch(error => console.log('error!'))
  }

  deleteNote = id => {
    axios
      .delete(`https://mitchellnotes-backend.herokuapp.com/api/notes/${id}`)
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
        <Route exact path='/notes/:id' render={props => (
          <NoteCard
            {...props}
            notes={this.state.notes}
            deleteNote={this.deleteNote}
          />
        )} />
        <Route exact path='/notes/edit/:id' render={props => (
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
