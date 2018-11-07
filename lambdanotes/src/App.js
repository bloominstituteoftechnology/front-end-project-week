import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import ListView from './components/ListView';
import NoteView from './components/NoteView';


import axios from 'axios';
import { Route } from 'react-router-dom';


class App extends Component {
  constructor() {
    super();
    this.state = {
      notesList: [],
      currentNote: {},
    }
  }

  componentDidMount() {
    axios
      .get(`https://fe-notes.herokuapp.com/note/get/all`)
        .then(res => {this.setState({notesList: res.data})})
  }

  // Todo: add error above

  getCurrentNoteByID = (note_id) => {
    axios.get(`https://fe-notes.herokuapp.com/note/get/${note_id}`)
      .then(res => {this.setState({currentNote: res.data._id})})
        .catch(err => {console.log(err)})
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <h1>Lambda Notes</h1>
        <Route exact path= '/' render= {(props) => (<ListView {...props} notesData= {this.state.notesList} />)}/>
        {/* <Route exact path = '/note/get/:_id' component= {NoteView} notesData= {this.state.notesList} /> */}
        <Route exact path = '/note/get/:_id' render= {(props) => (<NoteView {...props} notesData= {this.state.notesList} currentNote={this.state.currentNote} />)}/>
      </div>
    )
  }
}

export default App;

