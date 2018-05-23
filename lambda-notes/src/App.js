import React, { Component } from 'react';
import {
  Route
} from 'react-router-dom';

import './App.css';
import ListViewContainer from './containers/ListViewContainer/ListViewContainer';
import CreateNewViewContainer from './containers/CreateNewViewContainer/CreateNewViewContainer';

class App extends Component {
  render() {
    return (
      <div className="App container-fluid">
        <Route exact path = "/" component = {ListViewContainer}/>
        <Route path = "/create-new-note" component = {CreateNewViewContainer} />
      </div>
    );
  }
}

export default App;
