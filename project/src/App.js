import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import { notes } from './data';
import { Route } from 'react-router-dom';
import NoteView from './components/NoteView';
import NoteList from './components/NoteList';

class App extends Component {
  constructor(){
    super(),
    this.state={
      notes: notes
    }
  }
    render(){
      return (
        <div className="App">
          <Route path = '/' component = {Sidebar} />
          <Route exact path = '/' render = {props => <NoteList {...props} notes = {this.state.notes} />} />
          <Route exact path = '/:id' render = {props => <NoteView {...props} notes = {this.state.notes} />} />
        </div>

      );
    }
  }
export default App;
