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
      notes: [{}]
    }
  }

render() {
  return (
    <div>
    <h2>Lambda Notes</h2>

     </div>
      );    
    }    
  }  
  
export default App;

