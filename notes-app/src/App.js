import React, { Component } from 'react';
import NotesList from './components/NotesList';
//import { Route } from 'react-router-dom';
import axios from 'axios';
import './App.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: [],
    }
  }

  componenetDidMount() {
    axios
      .get('https://fe-notes.herokuapp.com/note/get/all')
      .then(response => {
        this.setState(() => ({ notes: response.data }))
      })
      .catch(error => {
        console.log('Server Error', error)
      })
  }

  render() {
    return (
      <div className="App">
          <NotesList
           notes={this.state.notes} />
      </div>
    );
  }
}

export default App;
