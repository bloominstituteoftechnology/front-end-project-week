import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import NoteList from './components/NoteList';
import CreateNote from './components/CreateNote';
import Note from './components/Note';
import EditNote from './components/EditNote';
import SideBar from './components/SideBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="app-container">
          <Route path="/" component={SideBar} />
          <Switch className="container">
              <Route exact path="/" component={NoteList} />
              <Route path="/addNote" component={CreateNote} />
              <Route path="/note/:id" component={Note} />
              <Route path="/editNote/:id" component={EditNote} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
