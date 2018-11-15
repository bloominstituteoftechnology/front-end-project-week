import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import { Route } from 'react-router-dom';
import NotesList from './components/NotesList';
import Note from '/components/Note';
import SideBar from './components/SideBar';
import CreateNote from './components/CreateNote';
import EditNote from './components/EditNote';

class App extends Component {
  constructor() {
    super()
    this.state = {
      notes: [],
      title: '',
      text: '',
      updatedTitle: '',
      updatedText: '',
      delete: false,
      filteredNotes: [],
      searchTerm: ''
    }
  }

  componentDidMount() {
    let url = 'https://fe-notes.herokuapp.com/note/get/all';
    axios
      .get(url)
      .then(res => {
        this.setState({ notes: res.data })
      })
      .catch(err => {
        console.log('Error: ', err)
      })
  }

  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    return (
      
    );
  }
}

export default App;
