import React, { Component } from 'react';
import './App.css';
import SideBar from './components/SideBar';
import { Route } from 'react-router-dom';
import Notes from './components/Notes';
import Note from './components/Note';
import CreateNote from './components/CreateNote';
import EditNote from './components/EditNote';
import axios from 'axios';


class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: []
    }
  }

  componentDidMount() {
    axios.get('https://killer-notes.herokuapp.com/note/get/all')
    .then(res => {
      this.setState({
        notes: res.data
      })
    })
    .catch(err => console.log(err));
  }

  addNote = (newNote) => {
    axios.post('https://killer-notes.herokuapp.com/note/create', newNote)
      .then(res => {
        axios.put(`https://killer-notes.herokuapp.com/note/edit/${res.data.success}`, newNote)
        .then(res => {
          this.componentDidMount();
        })
        .catch(err => console.log(err));
      })
      .catch(err => console.log(err));
  }

  deleteNote = (id, event) => {
    // event.preventDefault();
    // const notes = this.state.notes.filter(note => note._id != id)
    // this.setState({
    //   notes: notes
    // })
    axios.delete(`https://killer-notes.herokuapp.com/note/delete/${id}`)
      .then(res => {
        this.componentDidMount();
      })
      .catch(err => console.log(err));
  }

  editNote = (updatedNote) => {
    // const notes = this.state.notes.map(oldNotes => updatedNote.find(editedNotes => editedNotes._id == oldNotes._id) || oldNotes)
    // console.log(notes);
    // this.setState({
    //   notes: notes
    // })
    axios.put(`https://killer-notes.herokuapp.com/note/edit/${updatedNote._id}`, updatedNote)
      .then(res => {
        this.componentDidMount();

      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
        {/* SideBar always visible */}
        <SideBar />
        {/* Routes based on SideBar navigations or main-view navigations - note, edit, delete */}
        {/* main-view with all notes */}
        <Route exact path='/' render={props => ( <Notes {...props} notes={this.state.notes} /> )} />
        {/* main-view with specific note, contains DeleteNote component */}
        <Route path='/note/:id' render={props => ( <Note {...props} notes={this.state.notes} deleteNote={this.deleteNote} /> )} />
        {/* main-view create note goes here, class component */}
        <Route exact path='/create-note' render={props => ( <CreateNote {...props} notes={this.state.notes} addNote={this.addNote} /> )} />
        {/* main-view edit note goes here, class component */}
        <Route exact path='/note-edit/:id' render={props => ( <EditNote {...props} notes={this.state.notes} editNote={this.editNote} /> )} /> 
      </div>
    );
  }
}

export default App;
