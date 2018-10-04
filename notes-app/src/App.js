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
    }
  }

  componentDidMount() {
    this.getNoteRequest();
  }

  getNoteRequest = () => {
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

  deleteNoteRequest = noteID => {
    console.log('deleteNoteRequest working');
  }

  render() {
    console.log(this.state.notes)
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Lambda Notes</h1>
          <Link to={`/`} style={{textDecoration: 'none'}}><div>View Your Notes</div></Link>
          <Link to={'/addnote'} style={{textDecoration: 'none'}}><div>+ Create New Note</div></Link>
        </header>
        <div className="main-component">
          <Route 
          exact path='/' 
          render={(props) => 
            (<NoteList {...props} 
            notes={this.state.notes} />)} />
          <Route 
          path='/notes/:id' 
          render={(props) => 
            (<NotePage {...props} 
            notes={this.state.notes} 
            deleteNoteRequest={this.deleteNoteRequest} />)} />
          <Route 
          path = '/addnote' 
          render={(props) => 
            (<NoteForm {...props} 
            postNoteRequest={this.postNoteRequest}/>)} />
        </div>
      </div>
    )
  }
}
export default App;
