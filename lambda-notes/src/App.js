import React, { Component } from 'react';
import axios from 'axios';
import './reset.css';
import './App.css';
import { Route, Link } from 'react-router-dom';

import NoteList from './components/NotesList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: []
    };
  }

  componentDidMount() {
    axios
      .get()
      .then()
      .catch();
  }

  render() {
    return (
      <div className="App">
        <aside>
          <h1>Lambda Notes</h1>
          <div className="asideBtn">View Your Notes</div>
          <div className="asideBtn">+ Create New Note</div>
        </aside>
        <Route path="/" exact component={NoteList} />
        {/* <Route path="/create" component={CreateNote} />
        <Route path="/view/:id" component={} />
        <Route path="/edit/:id" component={} /> */}
      </div>
    );
  }
}

export default App;
