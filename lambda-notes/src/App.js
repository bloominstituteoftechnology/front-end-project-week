import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route } from 'react-router-dom';

import CreateNote from './components/CreateNote/CreateNote';
import ListView from './components/ListView/ListView';
import NoteView from './components/NoteView/NoteView';
import SearchNote from './components/SearchNote/SearchNote';

import './App.css';

class App extends Component {
  render() {
    return(
      <Router>
        <div className="App">
          <Route exact path='/' component={ ListView } />
          <Route path='/view/:id' component={ NoteView } />
          <Route path='/create' component={ CreateNote } />
          <Route path='/search' component={ SearchNote } />
        </div>
      </Router>
    );
  }
}

export default App;
