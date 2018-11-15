import React, { Component } from 'react';
import { Route } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import NoteForm from './components/NoteForm';
class App extends React.Component {
  constructor() {
    super();
    this.state = {

    };

  }


  render() {
    return (
      <div className="App">
      <Route path="/noteform" component={NoteForm} />
      </div>
    );
  }
}

export default App;
