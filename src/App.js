import React, { Component } from 'react';
import { Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import NoteList from "./components/NoteList";
import ViewNote from "./components/ViewNote";
import Edit from "./components/Edit";
import Create from "./components/Create";
import './App.css';


const initialNotes = [
 
  { id: 1, title: "Test Note 1", content: "Note content Note content Note content Note content Note content..."},
  { id: 2, title: "Test Note 2", content: "Note content Note content Note content Note content Note content..."},
  { id: 3, title: "Test Note 3", content: "Note content Note content Note content Note content Note content..."},
  { id: 4, title: "Test Note 4", content: "Note content Note content Note content Note content Note content..."},
  { id: 5, title: "Test Note 5", content: "Note content Note content Note content Note content Note content..."},
  { id: 6, title: "Test Note 6", content: "Note content Note content Note content Note content Note content..."},
  { id: 7, title: "Test Note 7", content: "Note content Note content Note content Note content Note content..."},
  { id: 8, title: "Test Note 8", content: "Note content Note content Note content Note content Note content..."},
  { id: 9, title: "Test Note 9", content: "Note content Note content Note content Note content Note content..."},

]
class App extends Component {

  constructor(props){
    super(props); 
    this.state = {
      notes: initialNotes, 
    }

    this.editNote = this.editNote.bind(this)
  }


  deleteNote = id => {
    const newNotes = this.state.notes.filter(note => note.id !== Number(id));
    this.setState({notes: newNotes});
    console.log('from app -- delete', newNotes)
    
  }

  editNote = newNote => {
    console.log(newNote);
    let {notes} = this.state;
    const idx = notes.findIndex(el => el.id === newNote.id); 
    notes.splice(idx,1, newNote);
    console.log('editNote state',notes)
    this.setState({notes: notes});
  }

  createNote = params => {
    const addNote = this.state.notes.slice().concat(params); 
    this.setState({notes: addNote});

    
    console.log('from createNote params...', params);
    console.log('after created..state', this.state.notes)
  }

  generateId = () => {
    const len = this.state.notes.length + 1;
    return len;
  }


  render() {
    return (
      <div className="App">
        <div className="container0">
          <Navbar />
          <Route  exact path="/" render={() => <NoteList notes={this.state.notes} />} />
          <Route path="/create" render={props => <Create {...props} create={this.createNote} id={this.generateId}/>} />
          <Route path="/view/:id" render={props => <ViewNote {...props} notes={this.state.notes} delete={this.deleteNote}/>} />
          <Route path="/edit/:id" render={props => <Edit {...props} notes={this.state.notes} edit={this.editNote}/>} />
        </div>
      </div>
    );
  }
}

export default App;
