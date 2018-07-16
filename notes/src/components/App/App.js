import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import ListView from '../Page/ListView';
import CreateNewView from '../Page/CreateNewView';
import EditView from '../Page/EditView';
import NoteView from '../Page/NoteView';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Route exact path="/" render={(props) => <ListView {...props} />} />
        <Route exact path="/create" render={(props) => <CreateNewView {...props} />} />
        <Route exact path="/edit/:noteID" render={(props) => <EditView {...props} />} />
        <Route exact path="/note/:noteID" render={(props) => <NoteView {...props} />} />
      </div>
    );
  }
}

export default App;
