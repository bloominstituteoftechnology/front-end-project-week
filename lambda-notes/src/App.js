import React, { Component } from 'react';
import axios from 'axios';

import './App.css';
import NavSideBar from './components/NavSideBar';
import NotesList from './components/NotesList';
import CreateNote from './components/CreateNote';
import DisplayNote from './components/DisplayNote';
import EditNote from './components/EditNote';

export const HOME = 'HOME';
export const NOTE = 'NOTE';
export const CREATE = 'CREATE';
export const EDIT = 'EDIT';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      appState: HOME,
      notes: [],
      currentNote: {},
      error: ''
    }
  }

  componentDidMount(){
    axios.get('https://fe-notes.herokuapp.com/note/get/all')
    .then(response=>{
      this.setState({notes: response.data});
    })
    .catch(error=>{
      // TODO: Add error element to dom
      this.setState({error: 'Failed to load notes'});
    })
  }

  setAppState = appState=>{
    this.setState({appState: appState});
  }

  setCurrentNote = id=>{
    this.setState({appState: NOTE, currentNote: this.state.notes.find(note=>note._id===id)});
  }

  addNote = note=>{
    axios.post('https://fe-notes.herokuapp.com/note/create', note)
    .then(response=>{
      const newNote = Object.assign({}, note, {'_id': response.data.success});
      const newNotes = this.state.notes;
      newNotes.push(newNote);
      this.setState({appState: HOME, notes: newNotes});
    })
    .catch(error=>{
      this.setState({error: 'Failed to create note'});
    })
  }

  editNote = (id, note)=>{
    axios.put(`https://fe-notes.herokuapp.com/note/edit/${id}`, note)
    .then(response=>{
      const index = this.state.notes.findIndex(note=>note._id===id)
      const newNotes = this.state.notes;
      newNotes[index] = response.data;
      this.setState({appState: NOTE, notes: newNotes, currentNote: response.data});
    })
    .catch(error=>{
      this.setState({error: 'Failed to update note'});
    })
  }

  deleteNote = id=>{
    axios.delete(`https://fe-notes.herokuapp.com/note/delete/${id}`)
    .then(response=>{
      const index = this.state.notes.findIndex(note=>note._id===id);
      const newNotes = [...this.state.notes.slice(0, index), ...this.state.notes.slice(index + 1)];
      this.setState({appState: HOME, notes: newNotes});
    })
    .catch(error=>{
      this.setState({error: 'Failed to delete note'});
    })
  }

  render() {
    return (
      <div>
        <NavSideBar setAppState={this.setAppState}/>

        {
          this.state.appState === HOME ? <NotesList notes={this.state.notes} setCurrentNote={this.setCurrentNote}/> :
          this.state.appState === NOTE ? <DisplayNote note={this.state.currentNote} editNote={this.editNote} deleteNote={this.deleteNote} setAppState={this.setAppState}/> :
          this.state.appState === CREATE ? <CreateNote addNote={this.addNote}/> :
          this.state.appState === EDIT ? <EditNote note={this.state.currentNote} editNote={this.editNote}/> :
          null
        }
      </div>
    );
  }
}

export default App;
