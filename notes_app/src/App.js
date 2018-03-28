import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom'
import NoteList from './components/noteList';
import noteList from './components/noteList.css';



class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NoteList />
          <Route exact path="/" component={AddNote} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

