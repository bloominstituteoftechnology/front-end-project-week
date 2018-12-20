import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

import Note from './components/Note'
import NoteList from './components/NoteList'

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: []
      }
    }
  componentDidMount() {
    axios
    .get(`https://fe-notes.herokuapp.com/note/get/all`)
    .then(response => {
      this.setState({
        notes: response.data
      })
    })
    .catch(error => console.log(error));
  }
  addTodo() {

  }
  render() {
    return (
      <div>
        <NoteList />
      </div>
    )
  }
}

export default App;
