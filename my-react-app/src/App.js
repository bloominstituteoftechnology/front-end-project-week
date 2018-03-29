import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NotesList from './components/NotesList';

class App extends Component {
  render() {
    return (
      <div className="App">
      
      <h1> Lambda Notes </h1>

      <div className='container0'>
        <button> View Your Notes </button><br/>
        <button> +Create New Note </button><br/>
        </div>
      
    <NotesList/>
      </div>
    );
  }
}

export default App;
