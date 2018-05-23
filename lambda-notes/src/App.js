import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';

import './App.css';
import ListViewContainer from './containers/ListViewContainer/ListViewContainer';
import CreateNewViewContainer from './containers/CreateNewViewContainer/CreateNewViewContainer';
import NoteViewContainer from './containers/NoteViewContainer/NoteViewContainer';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App container-fluid">
        <ListViewContainer />
        {/* <CreateNewViewContainer />
        <NoteViewContainer /> */}
        </div>
      </Router>  
    );
  }
}

export default App;
