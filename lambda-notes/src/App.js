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
          <button>View Your Notes</button>
          <button>+ Create New Note</button>
        </div>
        <div>
          {/* <Switch> */}
            <Route exact path="/" component={ListNotes} ></Route>
            {/* <Route path="/notes/:id" component={Note} ></Route>
            <Route path="/notes/create" component={CreateNote} ></Route> */}
          {/* </Switch> */}
        </div>
      </div>
    );
  }
}

export default App;
