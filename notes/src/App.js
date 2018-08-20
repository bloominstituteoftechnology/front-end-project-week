import React, { Component } from 'react';
import { Route } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import ListView from './components/ListView';
import NoteView from './components/NoteView';
import Home from './components/Home';

class App extends Component {
  constructor() {
    super(); 
    this.state = {
      notes: [
        {
          tite: '1',
          content: 'im a note'
        },
        {
          tite: '2',
          content: 'im a note too'
        },
        {
          tite: '3',
          content: 'im a note too'
        },
        {
          tite: '4',
          content: 'im a note too'
        },
        {
          tite: '5',
          content: 'im a note too'
        },
        {
          tite: '6',
          content: 'im a note too'
        },
        {
          tite: '7',
          content: 'im a note too'
        },
        {
          tite: '8',
          content: 'im a note too'
        },
        {
          tite: '9',
          content: 'im a note too'
        },

      ]
    };
  }

  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Home} />
        
      </div>
    );
  }
}

export default App;
