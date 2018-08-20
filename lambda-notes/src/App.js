import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { notesData } from './notesData';
import { NoteList } from './components/notesContainer';


class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: []
    }
  }

  componentDidMount(){
    this.setState({ 
      notes: notesData,
     })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1 className="App-title">Lambda Notes</h1>
          <button>View Your Notes</button>
          <button>+ Create New Note</button>
        </div>
        <div>
          <NoteList notes={this.state.notes} />
        </div>
      </div>
    );
  }
}

export default App;
