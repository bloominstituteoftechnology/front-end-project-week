import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';

import Dashboard from './components/dashboard/Dashboard';
import NewNote from './components/newnote/NewNote';
import NoteView from './components/noteview/NoteView';
import EditNote from './components/editnote/EditNote';
import DeleteNote from './components/deletenote/DeleteNote';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" 
          render={props => <Dashboard {...props} />}
        />
        <Route
          path="/create"
          render={props => <NewNote {...props} />}
        />
        <Route path="/note/:id" component={ NoteView }/>
        <Route path="/edit/:id" component={ EditNote }/>
        <Route path="/delete" component={ DeleteNote }/>
      </div>
    );
  }
}

export default App;
