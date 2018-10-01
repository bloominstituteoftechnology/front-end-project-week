import React, { Component } from 'react';
import router, { Link } from 'react-router';
import axios from 'axios';
import './App.css';
import NoteList from './components/NoteList';
import NoteForm from './components/NoteForm';

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


          {/* <Link>Notes</Link>
          <Link>Make</Link> */}
        </header>
        <NoteForm />
        <NoteList notes={this.state.notes} />
      </div>
    );
  }
}

export default App;
