import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { data } from './NoteData';
// import Sidebar from './components/Sidebar';
import NoteList from './components/NoteList';
import ViewNote from './components/ViewNote';
import CreateNote from './components/CreateNote';
import EditNote from './components/EditNote';
import './App.css';


class App extends Component {
  constructor() {
    super()
    this.state = {
      notes: [],
      newNote: {
        title: '',
        body: ''
      },
      // singleNote: {
      //   title: '',
      //   body: ''
      // }
    }
  }

  componentDidMount() {
    this.setState({ notes: data })
  }

  createNote = (newNote) => {
    // this.state.notes.push(newNote);
    this.setState({ notes: [...this.state.notes, newNote] });
}

  // selectNote = (singleNote) => {
  //   this.setState({ singleNote: singleNote });
  // }

  editNote = (editedNote) => {
    const editedNotes = this.state.notes.map(note => {
      if (note.title === this.state.singleNote.title) {
        return { title: editedNote.title, body: editedNote.body };
      } else {
        return note;
      }
    });
  }

  deleteNote = (title) => {
    const editedNotes = this.state.notes.filter(note => note.title !== title);
    this.setState({ notes: editedNotes })
  }

  render() {
    return (
      <div className="App">
      {/* <Sidebar /> */}
      <Route exact path='/' render={() => <NoteList {...this.state} selectNote={this.selectNote}/>} />
      <Route exact path='/createNote' render={() => <CreateNote createNote={this.createNote}/>} />
      <Route exact path='/viewNote/:id' render={(props) => <ViewNote {...props} {...this.state} deleteNote={this.deleteNote}/>} />
      <Route exact path='/editNote/' render={() => <EditNote {...this.state} editNote={this.editNote} />} />
      </div>
    );
  }
}

export default App;
