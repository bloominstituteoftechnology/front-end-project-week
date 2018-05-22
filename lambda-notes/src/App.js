import React, { Component } from 'react';
import './App.css';
import ListViewContainer from './containers/ListViewContainer/ListViewContainer';

class App extends Component {
  render() {
    return (
      <div className="App container-fluid">
        <ListViewContainer />
      </div>
    );
  }
}

export default App;
