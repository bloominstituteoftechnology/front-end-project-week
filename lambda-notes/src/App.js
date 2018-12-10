import React, { Component } from 'react';

import { fetchNotes } from "./Actions/index"


import Navigation from "./Components/Navigation/Navigation";
import NoteList from './Components/NoteList/NoteList';

import './App.css';


class App extends Component {

  componentDidMount() {
    this.props.fetchNotes();
  }

  render() {
    return (
      <div className="App">
        <div className="home-container">
        <Navigation />
        <NoteList />
        </div>
      </div>
    );
  }
}

export default App;
