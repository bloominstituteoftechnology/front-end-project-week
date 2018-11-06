import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import ListView from './components/ListView';
import NoteView from './components/NoteView'
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state = {
      notesList: [],
    }
  }

  componentDidMount() {
    axios
      .get('https://fe-notes.herokuapp.com/note/get/all')
        .then(res => {this.setState({notesList: res.data})})
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        
        {/* <div>
          {this.state.notesList.map(note => <ul><li>{note.title}</li></ul>)}
         
        </div> */}
        </header>
        <h1>Lambda Notes</h1>
        <ListView notesData = {this.state.notesList}/>
        <NoteView notesData = {this.state.notesList} />
      </div>
    );
  }
}

export default App;
