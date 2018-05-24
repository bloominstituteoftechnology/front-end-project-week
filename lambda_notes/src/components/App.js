import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import ListView from './ListView/ListView';
import Navigation from './Navigation/Navigation';
import NoteView from './NoteView/NoteView';
import EditView from './EditView/EditView';
import DeleteView from './DeleteView/DeleteView';
import CreateNoteView from './CreateNote/CreateNoteView';
import { config } from '../Config/config';
import firebase from 'firebase';
import 'firebase/database';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      notes: [],
    }
    this.addNote = this.addNote.bind(this);
    this.deleteNote = this.deleteNote.bind(this);
    this.app = firebase.initializeApp(config);
    this.database = this.app.database().ref().child('notes');
  }
  componentWillMount(){
    const previousNotes = this.state.notes;

    this.database.on('child_added', snap => {
      previousNotes.push({
        id: snap.key,
        title: snap.val().title,
        content: snap.val().content,
      })
      this.setState({
        notes: previousNotes
      })
    })

    this.database.on('child_removed', snap => {
      for(var i=0; i < previousNotes.length; i++){
        if(previousNotes[i].id === snap.key){
          previousNotes.splice(i, 1);
        }
      }
      this.setState({
        notes: previousNotes
      })
    })
  }

  addNote(note){
    this.database.push().set({ title: note.title, content: note.content})
  }

  deleteNote(noteId){
    console.log("From the parent:" + noteId)
    this.database.child(noteId).remove();
  }

  render() {
    return (
      <div className="App">
        <Route path="/" component={Navigation}/>
        <Route path="/home" render={(props) => {
          return <ListView notes={this.state.notes}/>
        }}/>
        <Route path="/note/view" component={NoteView}/>
        {/* <Route path="/note/:id" component={NoteView}/> */}
        <Route path="/note/view" render ={(props) => {
          return <DeleteView notes={this.state.notes} deleteNote={this.deleteNote}/>
          }}/>
        <Route path="/note/create" render={(props) => {
          return <CreateNoteView addNote={this.addNote}/>
        }}/>
        <Route path="/note/edit" component={EditView}/>
      </div>
    );
  }
}

export default App;
