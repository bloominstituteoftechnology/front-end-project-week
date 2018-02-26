import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Sidebar from './Sidebar';
import NoteList from './NoteList';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Sidebar />
          <Route path="/" component={NoteList} />
        </div>
      </Router>
    );
  }
}

export default App;
