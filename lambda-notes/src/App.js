import React, { Component } from 'react';
import './App.css';
import ListViewContainer from './containers/ListViewContainer/ListViewContainer';
import CreateNewViewContainer from './containers/CreateNewViewContainer/CreateNewViewContainer';

class App extends Component {
  render() {
    return (
      <div className="App container-fluid">
        <ListViewContainer />
        <CreateNewViewContainer />
      </div>
    );
  }
}

export default App;
