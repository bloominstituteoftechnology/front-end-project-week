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
        <header>The Type of View</header>
        <div className="app-container">
          <div className="sidebar">
            <Route path="/" component={SideBar} />
          </div>
          <Switch className="container">
              <Route exact path="/" component={NoteList} />
              <Route path="/addNote" component={CreateNote} />
              <Route path="/note" component={Note} />
              <Route path="/editNote" component={EditNote} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
