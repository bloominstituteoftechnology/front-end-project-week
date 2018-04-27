import React, { Component } from 'react';
//import './App.css';
import NewNote from './components/NewNote.js';
import EditNote from './components/EditNote.js';
import DeleteNote from './components/DeleteNote.js';
import ListNotes from './components/ListNotes.js';

 class App extends Component {
  constructor() {
    super()
    this.state = {
      addNote: '',
      notes: [{}]
    }
  }

  noteHandler = event => {
    console.log(event.target.value);
  }

  handleSubmitNote = () => {
    console.log('clicked', this);
  }

render() {
  return (
    <div>
    <h2>Lambda Notes</h2>
    <input
    type="text"
    placeholder="Add Note"
    name="addNote"
    value={this.state.addNote}
    onChange={this.noteHandler}
    />
    <button onClick={this.handleSubmitNote} >Add Note</button>
     </div>
      );    
    }    
  }  
  
export default App;

