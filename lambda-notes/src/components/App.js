import React, { Component } from 'react';
import { 
  BrowserRouter as Router, Route 
} from 'react-router-dom';

import Home from './Home';
import Note from './Note';
import CreateNote from './CreateNote';
import Edit from './Edit';

import '../css/App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={ Home }/>
          <Route path='/note' component={ Note } />
          <Route path='/create' component={ CreateNote } />
        </div>
      </Router>
    );
  }
}

export default App;
