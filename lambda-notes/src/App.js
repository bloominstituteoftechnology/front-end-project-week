import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from './components/Home/Home';
import CreateNote from './components/CreateNote/CreateNote';
import { notes } from './notes';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: [],
    }
  }

  componentDidMount() {
    this.setState({ notes: notes })
  }

  addNote = (note) => {
    const notes = this.state.notes;
    notes.push(note);
    this.setState({ notes: notes })
  }

  render() {
    return (
      <div className="App">
        <Route exact path="/" render={(props) => { return (<Home {...props} notes={this.state.notes} />) }} />
        <Route exact path="/CreateNote" render={(props) => { return (<CreateNote {...props} addNote={this.addNote} />) }} />
      </div>
    );
  }
}

export default App;
