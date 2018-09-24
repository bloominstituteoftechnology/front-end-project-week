import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NoteList from './components/NoteList';

class App extends Component {
  constructor(){
    super();
    this.state = {
      notes: [
        {title: 'example title', content: 'example content'},
        {title: 'second example title', content:'second example content'},
      ],
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to de Jungle</h1>
        </header>
        <NoteList notes={this.state.notes} />
      </div>
    );
  }
}

export default App;
