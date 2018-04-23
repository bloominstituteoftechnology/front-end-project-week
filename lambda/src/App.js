import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import { notes } from './components/notes.js';
import { NotesList } from './components/NotesList';
import { SideBar } from './components/SideBar';

class App extends Component {
  constructor(){
    super();
    this.state={
      notes: []
    };
  }

  componentDidMount() {
   this.setState({notes: notes });
  }
  render() {
    return (
      <div className="App">
          <SideBar className="sideBar" />
          <NotesList className="notesList" notesProp={this.state.notes} />
      </div>
    );
  }
}

export default App;
