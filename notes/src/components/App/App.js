import React, { Component } from 'react';
import firebase from '../../firebase';
import { Route } from 'react-router-dom';
import ListView from '../Page/ListView';
import CreateNewView from '../Page/CreateNewView';
import EditView from '../Page/EditView';
import NoteView from '../Page/NoteView';
import Nav from '../Nav';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      searchNotes: [],
      searchTerm: ''
    };
  }

  onAddNote = note => {   
    const notesRef = firebase.database().ref('notes');
    notesRef.push(note)
    .then(() => {
      window.location.href = '/';
    })
    .catch(error => console.log(error));
  }

  onUpdateNote = (note) => {
    console.log('update', note);
    const noteRef = firebase.database().ref('notes/' + note.id);
    noteRef.set(note)
    .then(() => {
      window.location.href = `/note/${note.id}`;
    })
    .catch(error => console.log(error));
  }

  onDeleteNote = id => {
    const noteRef = firebase.database().ref(`/notes/${id}`);
    noteRef.remove()
    .then(() => {
      window.location.href = '/';
    })
    .catch(error => console.log(error));
  }

  onSearchNotes = (event, term) => {
    event.preventDefault();
    this.searchNotes(term);
  }

  searchNotes = term => {
    let newData = this.state.notes.slice();
    if (term.trim() !== '') {
      newData = newData.filter((element) => {
        return element.title.includes(term) || element.noteContent.includes(term);
      } );
    }
    this.setState({searchNotes: newData, searchTerm: term});
  }

  componentDidMount() {
    const notesRef = firebase.database().ref('notes');
    notesRef.on('value', (snapshot) => {
      let notes = snapshot.val();
      let newState = [];
      for (let note in notes) {
        newState.push({
          id: note,
          title: notes[note].title,
          noteContent: notes[note].noteContent
        });
      }
      this.setState({
        notes: newState
      });
      this.searchNotes('');
    });
  }

  render() {
    return (
      <div className="app">
        <Route path="/" render={(props) => <Nav {...props} />} />
        <Route exact path="/" render={(props) => <ListView {...props} notes={this.state.searchNotes} onSearchNotes={this.onSearchNotes} />} />
        <Route exact path="/create" render={(props) => <CreateNewView {...props} onSubmitNote={this.onAddNote} />} />
        <Route exact path="/edit/:noteID" render={(props) => <EditView {...props} notes={this.state.notes} onSubmitNote={this.onUpdateNote} />} />
        <Route exact path="/note/:noteID" render={(props) => <NoteView {...props} notes={this.state.notes} onDeleteNote={this.onDeleteNote} />} />
      </div>
    );
  }
}

export default App;
