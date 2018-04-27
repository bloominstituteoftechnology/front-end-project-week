import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import NoteList from './components/Notes/ListView';
import Menu from './components/Menu/Menu';
import axios from 'axios';
import CreateNote from './components/Notes/NewNote';
import Note from './components/Notes/Note';
import NoteView from './components/Notes/NoteView';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: []
    };
  }

  componentDidMount() {
    this.getNotes();
  }

  getNotes = () => {
    axios
      .get(`http://localhost:5000/notes`)

      .then(response => {
        //   console.log('response:', response);
        this.setState({ notes: response.data });
      })
      .catch(error => {
        console.error('Error', error);
      });
  };

  render() {
    return (
      <div>
        <Menu />
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <NoteList
                getNotes={() => this.componentDidMount()}
                notes={this.state.notes}
              />
            )}
          />

          <Route path="/:id" component={NoteView} />

          <Route
            path="/create"
            render={() => (
              <CreateNote
                getNotes={() => this.componentDidMount()}
                notes={this.state.notes}
              />
            )}
          />
          <Route render={() => <h1>Please do not feed the animals!</h1>} />
        </Switch>
      </div>
    );
  }
}
