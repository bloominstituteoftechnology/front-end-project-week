import React, { Component } from 'react';
import './App.css';
import { Route, withRouter } from 'react-router-dom';
import axios from 'axios';

import Navigation from './components/Navigation';
import Notes from './components/Notes';
import Note from './components/Note'
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
      .get('https://fe-notes.herokuapp.com/note/get/all')
      .then(response => {
        this.setState(() => ({ notes: response.data }));
      })
      .catch(error => {
        console.error('Server Error', error);
      });
  }

  componentDidUpdate() {
    axios
      .get('https://fe-notes.herokuapp.com/note/get/all')
      .then(response => {
        this.setState(() => ({ notes: response.data }));
      })
      .catch(error => {
        console.error('Server Error', error);
      });
  }

  addNote = (newNote) => {
    axios
        .post('https://fe-notes.herokuapp.com/note/create', {
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
        .delete(`https://fe-notes.herokuapp.com/note/delete/${id}`)
        .then(response => {
          // console.log(response.data)
        })
        .catch(err => {
          console.log(err)
        })

    this.setState();
    this.props.history.push('/')
  }

  editNote = (id) => {
    axios
        .put(`https://fe-notes.herokuapp.com/note/edit/${id}`, {
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
        <Navigation />
        <Route exact path="/" render={ props => (
          <Notes {...props} notes={this.state.notes} delete={this.deleteNote} />
        )} />
        <Route path="/notes/:id" render={props => (
          <Note {...props} />
        )} />
        <Route exact path="/notes/:id/edit" render={props => (
          <EditForm {...props} notes={this.state.notes} editNote={this.editNote} inputHandler={this.inputHandler} updateTitle={this.state.updateTitle} updateTextBody={this.state.updateTextBody} />
        )} />
        <Route path="/new-note" render={ props => (
          <NewForm {...props} addNote={this.addNote} inputHandler={this.inputHandler} title={this.state.title} textBody={this.state.textBody} />
        )} />
      </div>
    );
  }
}

export default withRouter(App);
