import React, { Component } from 'react';
import './App.css';

import { Switch, Route, Link } from 'react-router-dom';
import { CreateNote, EditNote, ListNotes, Note } from './components/index';

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <div className="sidebar">
          <h1>Lambda Notes</h1>
          <Link to="/">
            <button>View Your Notes</button>
          </Link>
          <Link to="/notes/create">
            <button>+ Create New Note</button>
          </Link>
        </div>
        <div>
          <h2 className="main-header">Your Notes:</h2>
          <Route exact path="/" component={ListNotes} ></Route>
          <Route path="/notes/:id" component={Note} ></Route>
          {/* <Route path="/notes/create" component={CreateNote} ></Route> */}
        </div>
      </div>
    );
  }
}

export default App;
