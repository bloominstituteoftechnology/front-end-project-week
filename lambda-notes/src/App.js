import React, { Component } from 'react';
// import './App.css';
import { Route } from 'react-router-dom';
import NotesList from './components/notesList';
import NoteForm from './components/noteForm';
import Navigation from './components/navigation';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="d-flex">
          <Navigation />
          <Route path="/" component={ NotesList } />
          <Route path="/noteForm" component={ NoteForm } />
        </div>
      </div>
    );
  }
}

export default App;
