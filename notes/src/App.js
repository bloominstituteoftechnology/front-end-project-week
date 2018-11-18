import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import axios from 'axios';

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
      .get('https://fe-notes.herokuapp.com/note/get/all')
      .then(response => this.setState({ notes: response.data }))
      .catch(err => console.log(err));
  }

  handleSubmit = note => {
    axios
      .post('https://fe-notes.herokuapp.com/note/create', note)
      .then(() => this.updateNotes())
      .catch(err => console.log(err));
  };

  editNote = (note, id) => {
    axios
      .put(`https://fe-notes.herokuapp.com/note/edit/${id}`, note)
      .then(() => this.updateNotes())
      .catch(err => console.log(err));
  };

  updateNotes = () => {
    axios
      .get('https://fe-notes.herokuapp.com/note/get/all')
      .then(response => this.setState({ notes: response.data }))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="app-container">
        <h1>Lambda Notes</h1>
        <NavLink to="/">View Your Notes</NavLink>
        <NavLink to="/create">+ Create New Note</NavLink>
        <Route
          exact
          path="/"
          render={() => <Notes notes={this.state.notes} />}
        />
        <Route
          path="/view/:id"
          render={props => <ViewNote {...props} notes={this.state.notes} />}
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
            <EditNote
              {...props}
              notes={this.state.notes}
              onSubmit={this.editNote}
            />
          )}
        />
      </div>
    );
  }
}
