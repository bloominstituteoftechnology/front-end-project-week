import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import NoteList from './components/noteList';
import Form from './components/form';
import NoteCard from './components/note';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <h1 className="App-title">Lambda Notes</h1>
          <Route exact path="/" component={NoteList} />
          <Route path="/note/:id" component={NoteCard} />
          <Route path="/note/:id/form" component={Form} />
        </div>
      </Router>
    );
  }
}

export default App;
