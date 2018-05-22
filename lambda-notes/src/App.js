import React, { Component } from 'react';
import './App.css';
import ListViewContainer from './containers/ListViewContainer/ListViewContainer';
import CreateNewViewContainer from './containers/CreateNewViewContainer/CreateNewViewContainer';
import NoteViewContainer from './containers/NoteViewContainer/NoteViewContainer';

class App extends Component {
  render() {
    return (
      <div className="App container-fluid">
        <ListViewContainer />
        <CreateNewViewContainer />
        <NoteViewContainer />
      </div>
    );
  }
}

export default App;
