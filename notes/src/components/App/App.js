import React, { Component } from 'react';
import firebase from '../../firebase';
import { Route } from 'react-router-dom';
import ListView from '../Page/ListView';
import CreateNewView from '../Page/CreateNewView';
import EditView from '../Page/EditView';
import NoteView from '../Page/NoteView';
import Nav from '../Nav';
import './App.css';

const API_URL = '';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
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
    });
  }

  render() {
    return (
      <div className="app">
        <Route path="/" render={(props) => <Nav {...props} />} />
        <Route exact path="/" render={(props) => <ListView {...props} notes={this.state.notes} />} />
        <Route exact path="/create" render={(props) => <CreateNewView {...props} onSubmitNote={this.onAddNote} />} />
        <Route exact path="/edit/:noteID" render={(props) => <EditView {...props} notes={this.state.notes} onSubmitNote={this.onUpdateNote} />} />
        <Route exact path="/note/:noteID" render={(props) => <NoteView {...props} notes={this.state.notes} onDeleteNote={this.onDeleteNote} />} />
      </div>
    );
  }
}

export default App;
