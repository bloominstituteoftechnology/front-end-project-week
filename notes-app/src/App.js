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
      newNote: {
        textTitle: '',
        textBody: ''
      }
    }
  }

  postNote = (newNote) => {
    axios.post('https://killer-notes.herokuapp.com/note/create', newNote)
      .then(res => this.setState({ notes: res.data, inputTextTitle: '', inputTextBody: '' }))
      .catch(err => console.log(err))
  }
  getNotes = () => {
    axios.get('https://killer-notes.herokuapp.com/note/get/all')
    .then(response => {
      console.log(response)
      this.setState({ notes: response.data })
    })
    .catch(error => console.log(' We have an Error!', error))
  }

  componentDidMount() {
    this.getNotes();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Note Taker </h1>
          <Link to={`/`}><button>Your Notes</button></Link>
          <Link to={'/makenote'}><button>Make Note</button></Link>
        </header>
        <div>
          <Route 
          exact path='/' 
          render={(props) => 
            (<NoteList {...props} 
            notes={this.state.notes} />)} />
          <Route 
          path='/notes/:id' 
          render={(props) => 
            (<NotePage {...props} 
            notes={this.state.notes} />)} />
          <Route 
          path = '/makenote' 
          render={(props) => 
            (<NoteForm {...props} 
            handleChange={this.handleChange} 
            postNote={this.postNote} />)} />
        </div>
      </div>
    )
  }
}
export default App;
