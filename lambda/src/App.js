import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import NotesList from './components/NotesList.js'; 
import CreateNew from './components/CreateNew.js';
import ListView from './components/ListView.js';
import Navigation from './components/Navigation.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: []
    };
  }

  componentDidMount() {
    this.newNotes();

    newNotes = () => {
    axios
    .get('http://localhost:3000')
    .then(response => {
      this.setState({ notes: response.data });
  })
  .catch(err => {
  });
 }
}
  render() {
    const { notes } = this.state;
    return (
      <div className="App">
        <header className="App-header">
         <h1 className="App-title">Lambda Notes</h1>
        </header>
       </div>
    );
  }
}

export default App;
