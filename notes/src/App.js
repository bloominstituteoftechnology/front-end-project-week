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
        note: null
      }
    }
    componentDidMount() {
      const id = this.props.match.params.id;
      this.fetchNotes(id);
    }
    fetchNotes = id => {
      axios
      .get(`https://fe-notes.herokuapp.com/note/get/all`)
      .then(response => {
        this.setState(() => ({ note: response.data }));
      })
      .catch(error => {
        console.error(error);
      });
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
