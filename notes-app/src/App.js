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
      inputTextTitle: '',
      inputTextBody: ''
    }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
    console.log(e.target.value)
  }

  postNote = e => {
    e.preventDefault();
    const note = {
      title: this.state.inputTextTitle,
      textBody: this.state.inputTextBody
    }
    console.log(note)
    axios.post('https://killer-notes.herokuapp.com/note/create', note)
      .then(res => this.setState({ notes: res.data, inputTextTitle: '', inputTextBody: '' }))
      .catch(err => console.log(err))
  }
  getNotes = () => {
    axios.get('https://killer-notes.herokuapp.com/note/get/all')
    .then(response => this.setState({notes: response.data}))
    .catch(error => console.log(' We have an Error!', err))
  }

  componentDidMount() {
    this.getNotes();
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Note Taker </h1>
          <Link to={`/notes`}><button>Your Notes</button></Link>
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
            textTitle={this.state.inputTextTitle} 
            textBody={this.state.inputTextBody} 
            handleChange={this.handleChange} 
            postNote={this.postNote} />)} />
        </div>
      </div>
    )
  }
}
export default App;
