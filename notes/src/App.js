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
      .get(`http://localhost:2200/api/notes`)
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

  // getNote = (note) => {
  //   console.log('clicked')
  //   console.log(note)
  //   axios.get(`http://localhost:2200/api/notes/${note.id}`)
  //     .then(response => {
  //     this.getNotes()
  //     })
  //   .catch(error => console.log('error!'))
  // }

  newNote = note => {
    axios
      .post(`http://localhost:2200/api/notes`, note)
      .then(response => {
        this.getNotes()
        this.setState({ notes: response.data })
      })
      .catch(error => console.log('error!'))
  }

  updateNote = (updateNote) => {
    console.log('Clicked!')
    axios
      .put(`http://localhost:2200/api/notes/${updateNote.id}`, updateNote)
      .then(response => {
        this.getNotes()
        console.log('response', response)
      })
      .catch(error => console.log('error!'))
  }

  deleteNote = id => {
    axios
      .delete(`http://localhost:2200/api/notes/${id}`)
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
