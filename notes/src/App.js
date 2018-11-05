import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

import NoteList from './NoteList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
    };
  }

componentDidMount() {
  axios
  .get('https://fe-notes.herokuapp.com/note/get/all')
    .then(response => {
      this.setState(() => ({ notes: response.data }));
    })
    .catch(error => {
      console.error('Error getting notes data.', error);
    });
}

  render() {
    return (
      <div className="App">
        <NoteList notes = {this.state.notes} />
      </div>
    );
  }
}

export default App;
