import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import NoteList from './components/NoteList';
import NoteForm from './components/NoteForm';
import NotePage from './components/NotePage';

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: [],
      isUpdating: false
    }
  }

  componentDidMount() {
    this.fetchNotes();
  }

  fetchNotes = () => {
    axios.get('https://killer-notes.herokuapp.com/note/get/all')
    .then(response => {
      console.log(response)
      this.setState({ notes: response.data })
    })
    .catch(error => console.log(' We have an Error!', error))
  }

  postNoteRequest = (newNote) => {
    axios.post('https://killer-notes.herokuapp.com/note/create', newNote)
      .then(response => this.setState({ notes: [...this.state.notes, {...newNote}]}))
      .catch(error => console.log(error))
  }

  deleteNote = id => {
    console.log('clicking');
    axios.delete(`https://killer-notes.herokuapp.com/note/delete/${id}`)
      // .then(response => console.log('deleted'))
      .then(response => this.setState({ notes: [...this.state.notes]}))

  }

  goToUpdateNoteForm = note => {
    console.log(note)
    this.setState({ note: note, isUpdating: !this.state.sUpdating})
  }

  handleUpdate = id => {
    axios.put(`http://localhost:5000/avengers/${id}`, this.state.note)
      .then(response => {
        this.fetchNotes();
      });
  }

  render() {
    console.log(this.state.notes)
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Lambda Notes</h1>
          <Link to={`/notes`} style={{textDecoration: 'none'}}><div>View Your Notes</div></Link>
          <Link to={'/noteform'} style={{textDecoration: 'none'}}><div>+ Create New Note</div></Link>
        </header>
        <div className="main-component">
          <Route 
          exact path='/notes' 
          render={(props) => 
            (<NoteList {...props} 
            notes={this.state.notes} />)} />
          <Route 
          path='/notes/:id' 
          render={(props) => 
            (<NotePage {...props} 
            notes={this.state.notes} 
            deleteNote={this.deleteNote} 
            goToUpdateNoteForm = {this.goToUpdateNoteForm}/>)} />
          <Route 
          path = '/noteform' 
          render={(props) => 
            (<NoteForm {...props} 
            postNoteRequest={this.postNoteRequest} />)} />
        </div>
      </div>
    )
  }
}
export default App;
