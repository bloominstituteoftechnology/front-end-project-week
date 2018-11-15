import React, { Component } from 'react';

import './App.css';
import axios from 'axios';

import { Notes } from './Notes';
import { AddNote } from './AddNote';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
    }
  }

  componentDidMount= () => {
    axios
    .get(`https://fe-notes.herokuapp.com/note/get/all`)
    .then ( response => {
      this.setState({notes: response.data})
    })
    .catch( err=> console.log(err))
  }

  addNote = obj => {
    axios.post('https://fe-notes.herokuapp.com/note/create', obj)
    .then(response => {
      this.setState({
        notes: response.data
      })
    })
    .catch( err => console.log(err))
  }

  render() {
    return (
      <div className="App">
        <AddNote addNote={this.addNote} />
        <Notes notes={this.state.notes} />
      </div>
    );
  }
}

export default App;
