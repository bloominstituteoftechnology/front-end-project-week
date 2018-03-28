import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route } from 'react-router-dom';

import ListView from './components/ListView/ListView';
import NoteView from './components/NoteView/NoteView';
import './App.css';

class App extends Component {
  render() {
    return(
      <Router>
        <div className="App">
          <Route exact path='/' component={ ListView } />
          <Route path='/view/:id' component={ NoteView } />
        </div>
      </Router>
    );
  }
}

export default App;
