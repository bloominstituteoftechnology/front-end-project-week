import React, { Component } from 'react';
import './App.css';
import { Note } from './Components/Note';
import { NoteList } from './Components/NoteList';
 
class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: []
    }
  }
 
  componentDidMount(){
    this.setState({ 
      notes: Note,
     })
  }

  render() {
    return (
      <div className="Main-Page">
      <div className="App-header">
        <h1 className="App-title">Lambda Notes</h1>
          <button>View Your Notes</button>
          <button>+ Create New Note</button>
          </div>
          <NoteList notes={this.state.notes} />
      </div>
    );
  }
 }
 
 export default App;