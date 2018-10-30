import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav/Nav';
import Notes from './components/Notes/Notes';
import CreateNote from './components/CreateNote/CreateNote';
import data from './data';
import { Route } from 'react-router-dom';

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: data
    }
  }
  render() {
    return (
      <div className="App">
        <Nav />
        <Route exact path="/" render={() => <Notes notes={this.state.notes} />} />
        <Route path="/new" render={() => <CreateNote />} />
      </div>
    );
  }
}

export default App;
