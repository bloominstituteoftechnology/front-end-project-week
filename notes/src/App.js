import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';

import Navigation from './components/Navigation';
import Notes from './components/Notes';
import ViewNote from './components/ViewNote';
import CreateNote from './components/CreateNote';
import EditNote from './components/EditNote';
import './App.css';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: [],
    };
  }

  componentDidMount() {
    axios
      .get('/note/get/all')
      .then(response => this.setState({ notes: response.data }))
      .catch(err => console.log(err));
  }

  updateNotes = () => {
    axios
      .get('/note/get/all')
      .then(response => this.setState({ notes: response.data }))
      .catch(err => console.log(err));
  };

  handleSubmit = note => {
    axios
      .post('/note/create', note)
      .then(() => this.updateNotes())
      .catch(err => console.log(err));
  };

  editNote = (note, id) => {
    axios
      .put(`/note/edit/${id}`, note)
      .then(() => this.updateNotes())
      .catch(err => console.log(err));
  };

  deleteNote = id => {
    axios
      .delete(`/note/delete/${id}`)
      .then(() => this.updateNotes())
      .catch(err => console.log(err));
  };

  render() {
    const { notes } = this.state;
    return (
      <div className="app-container">
        <Navigation />
        <div className="main-content">
          <Route exact path="/" render={() => <Notes notes={notes} />} />
          <Route
            path="/view/:id"
            render={props => (
              <ViewNote {...props} notes={notes} deleteNote={this.deleteNote} />
            )}
          />
          <Route
            path="/create"
            render={props => (
              <CreateNote {...props} onSubmit={this.handleSubmit} />
            )}
          />
          <Route
            path="/edit/:id"
            render={props => (
              <EditNote {...props} notes={notes} onSubmit={this.editNote} />
            )}
          />
        </div>
      </div>
    );
  }
}
