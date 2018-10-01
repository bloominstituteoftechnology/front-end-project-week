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
      inputTitle: '',
      inputTextBody: '',
    }
  }

  handleChange = (e) => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value })
    console.log(e.target.name)
  }

  postNote = (e) => {
    e.preventDefault();
    const note = {
      textBody: this.state.inputTextBody,
      title: this.state.inputTitle
    }

    axios.post('https://killer-notes.herokuapp.com/note/create', note)
      .then( res => {
        console.log(res)
      })
      .catch( err => {
        console.log(err)
      })

    this.setState({ inputTitle: '', inputTextBody: '' })
  }

  componentDidMount() {
    axios.get('https://killer-notes.herokuapp.com/note/get/all')
      .then( res => {
        this.setState({ notes: res.data });
        console.log(this.state.notes)})
      .catch( err => (
        console.log(err)
      ))
  }

  render() {
    console.log(this.state.notes)
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Note Taker </h1>
          <Link to={`/notes`}>Your Notes</Link>
          <Link to={'/makenote'}>Make Note</Link>
        </header>
        <div>
          <Route exact path='/notes' render={(props) => (<NoteList {...props} notes={this.state.notes} />)} />
          <Route path='/notes/:id' render={(props) => (<NotePage {...props} notes={this.state.notes} />)} />
          <Route path = '/makenote' render={(props) => (<NoteForm {...props} title={this.state.inputTitle} textBody={this.state.inputTextBody} postNote={this.postNote} inputText={this.handleChange} />)} />
        </div>
      </div>
    )
  }
}

export default App;
