import React, { Component } from 'react';
import {
  Route
} from 'react-router-dom';

import './App.css';
import ListViewContainer from './containers/ListViewContainer/ListViewContainer';
import CreateNewViewContainer from './containers/CreateNewViewContainer/CreateNewViewContainer';
import NoteViewContainer from './containers/NoteViewContainer/NoteViewContainer';
import EditViewContainer from './containers/EditViewContainer/EditViewContainer';  
import DeleteModalContainer from './containers/DeleteModalContainer/DeleteModalContainer';

class App extends Component {
  render() {
    return (
      <div className="App container-fluid">
        <Route exact path="/" component={ListViewContainer} />
        <Route path="/create-new-note" component={CreateNewViewContainer} />
        <Route path="/view-note" component={NoteViewContainer} />
        <Route path="/edit-note" component={EditViewContainer} />
        <Route path="/delete-note" component={DeleteModalContainer} />
      </div>
    );
  }
}

export default App;
