import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NoteForm from "./components/NoteForm";
import NotesList from "./components/NotesList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NoteForm />
        <NotesList />
      </div>
    );
  }
}

export default App;
