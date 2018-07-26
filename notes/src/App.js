import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Sidebar from './Components/Sidebar';
import notes, { NewNote, HandleNote, SingleNote } from './Components/notes';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Sidebar />
      <Route className="app-route" exact path="/" component={ notes }/>
      <Route exact path="/notes/NewNote" component={ NewNote }/>
      <Route path="/note/get/:id" component={ HandleNote }/>
      </div>
    );
  }
}

export default App;
