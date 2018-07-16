import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom'
import NotesList from './components/NotesList.js'
import Sidebar from './components/Sidebar.js'
import CreateNote from './components/CreateNote.js'

Storage.prototype.setObj = function(key, obj) {
  return this.setItem(key, JSON.stringify(obj))
}
Storage.prototype.getObj = function(key) {
    return JSON.parse(this.getItem(key))
}

class App extends Component {
  constructor() {
    super(),
    this.state = {
      notes: [],
      newNoteTitle: "",
      newNoteTopic: "",
      newNoteText: ""
    }
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  addNote = e => {
    const notes = this.state.notes;
    notes.push({
      id: notes.length,
      title: this.state.newNoteTitle,
      topic: this.state.newNoteTopic,
      text: this.state.newNoteText
    })
    localStorage.setObj('l-notes-storage-bin', notes)
  }

  componentDidMount() {
    let localData = localStorage.getObj('l-notes-storage-bin')
    if (localData === null) {
      localStorage.setObj('l-notes-storage-bin', [
        {
          id: 0,
          title: "Welcome to L Notes",
          topic: "Intro Note",
          text: "I'm gonna add instruction here since this notes will be here whenever someone opens the app for the first time.",
        }
      ]);
      window.location.reload();
    } else {
      this.setState({notes: localData})
      console.log("pulled from localStorage")
    }
  }

  componentWillUnmount() {
    localStorage.setObj('l-notes-storage-bin', this.state.notes)
  }

  render() {
    const values = {
      title: this.state.newNoteTitle,
      topic: this.state.newNoteTopic,
      text: this.state.newNoteText
    }
    return (
      <div className="App">
        <Sidebar />
        <Route exact path="/" render={props => <NotesList {...props} notes={this.state.notes} />} />
        <Route path="/add-note" render={props => <CreateNote {...props} addNote={this.addNote} eHandler={this.handleInputChange} values={values} />} />
        {/* <Route path="/notes" component={Notes} />
      <Route path="/notes/:id" render={props => <Note {...props}  />} /> */}
      </div>
    );
  }
}

export default App;
