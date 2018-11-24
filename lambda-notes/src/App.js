import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { instance } from './utils.js';

import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import NotesList from './components/Notes/NotesList';
import Note from './components/Notes/Note';
import CreateNote from './components/Notes/CreatNote';

class App extends Component {
  constructor() {
    super();
      this.state = {
        notes: [
          {
            title: 'pizza',
            textBody: 'please eat some good pizza kid'
          },
          {
            title: 'cows',
            textBody: 'good for beef tacos!!'
          }
        ]
      }
  }

  componentDidMount() {
    instance.get('/get/all')
      .then(response => {
        console.log(response);
        this.setState(() => ({ notes: response.data }));
      })
      .catch(err => {
        console.log(err, 'Whoops');
      });
  }

  render() {
    if (!this.state.notes) {
      return <div>Sorry, there aren't any notes...</div>
    }
    return (
      <div className="App">
        <Sidebar />
        <Route
          exact
          path='/'
          render={props => (
            <NotesList notes={this.state.notes} />
          )} />
        <Route path='/get/:id' component={Note} />
        <Route path='/create' component={CreateNote} />
      </div>
    );
  }
}

export default App;
