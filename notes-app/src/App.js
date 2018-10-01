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
      notes: []
    }
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
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Note Taker </h1>
          <Link to={`/`}>Your Notes</Link>
          <Link to={'/makenote'}>Make Note</Link>
        </header>
        {/* <NoteForm />
        <NoteList notes={this.state.notes} /> */}
        <Route exact path='/' render={(props) => (<NoteList {...props} notes={this.state.notes} />)} />
        <Route path='/Note/:id' render={(props => (<NotePage {...props} notes={this.state.notes} />))} />
      </div>
    )
  }
}

export default App;
