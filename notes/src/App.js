import React, { Component } from 'react';
import './App.css';
import { Route, withRouter } from 'react-router-dom';
import axios from 'axios';

import Navigation from './components/Navigation';
import Notes from './components/Notes';
import NoteCard from './components/NoteCard'
import NewForm from './components/NewForm';
import EditForm from './components/EditForm';

class App extends Component {
  constructor(props) {
    super(props) 

    this.state = {
      notes: [],
      title: '',
      textBody: '',
      updateTitle: '',
      updateTextBody: '',
    }
  }

  componentDidMount() {
    axios
      .get('https://killer-notes.herokuapp.com/note/get/all')
      .then(response => {
        this.setState(() => ({ notes: response.data }));
      })
      .catch(error => {
        console.error('Server Error', error);
      });
  }

  addNote = (newNote) => {
    axios
        .post('https://killer-notes.herokuapp.com/note/create', {
          title: this.state.title,
          textBody: this.state.textBody
        })
        .catch(err => {
          console.log(err)
        })

    this.setState({ title: '', textBody: '' })
  }

  deleteNote = (id) => {
    axios
        .delete(`https://killer-notes.herokuapp.com/note/delete/${id}`)
        .then(response => {
          console.log(response.data)
        })
        .catch(err => {
          console.log(err)
        })

    this.setState();
    this.props.history.push('/')
  }

  editNote = (id) => {
    axios
        .put(`https://killer-notes.herokuapp.com/note/edit/${id}`, {
          title: this.state.title,
          textBody: this.state.textBody          
        })
        .catch(err => {
          console.log(err)
        })
  }

  updatedNote = (title, textBody) => {
    this.setState({ updateTitle: title, updateTextBody: textBody })
  }

  inputHandler = event => {
    this.setState({ [event.target.name] : event.target.value })
  }

  render() {
    return (
      <div className="App">
      </div>
    );
  }
}

export default withRouter(App);
