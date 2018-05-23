import React, { Component } from 'react';
import { Route } from 'react-router-dom';
<<<<<<< HEAD
import axios from 'axios';
import Home from './components/Home/Home';
import CreateNote from './components/CreateNote/CreateNote';
import Note from './components/Note/Note'; 
=======
import Home from './components/Home/Home';
import CreateNote from './components/CreateNote/CreateNote';
import { notes } from './notes';
>>>>>>> 84d351c9bc02fd1f746ec4a92576c40646625eb2
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: [],
    }
  }

  componentDidMount() {
<<<<<<< HEAD
    axios.get(`http://localhost:5000/api/notes`)
      .then(response => this.setState({ notes: response.data }))
      .catch(error => { console.log(error) })
  }

  addNote = (note) => {
    axios.post(`http://localhost:5000/api/notes`, note)
      .then(response => this.setState({ notes: response.data }))
      .catch(error => { console.log(error) })
  }

  render() {
    console.log('This State Notes', this.state.notes);
    return (
      <div className="App">
        <Route exact path="/" render={(props) => { return (<Home {...props} notes={this.state.notes} />) }} />
        <Route exact path="/CreateNote" render={(props) => { return (<CreateNote {...props} addNote={this.addNote} notes={this.state.notes} />) }} />
        <Route exact path="/notes/:id" render={(props) => { return (<Note {...props} />) }} />
=======
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
>>>>>>> 84d351c9bc02fd1f746ec4a92576c40646625eb2
      </div>
    );
  }
}

export default App;
