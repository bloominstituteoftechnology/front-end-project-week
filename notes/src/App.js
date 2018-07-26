import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Sidebar from './Components/Sidebar';
import notes, { NewNote, HandleNote } from './Components/notes';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Sidebar />
      <Route exact path="/" component={ notes }/>
      <Route exact path="/note/create" component={ NewNote }/>
      <Route path="/note/get/:id" component={ HandleNote }/>
      </div>
    );
  }
}

export default App;
