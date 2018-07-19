import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import SideNav from './SideNav/SideNav';
import Notes from './Notes/Notes';
import NewNote from './NewNote/NewNote';
import ViewNote from './Notes/ViewNote';
import EditNote from './NewNote/EditNote';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
      <SideNav />
        <Switch>
          <Route exact path="/"
          render = {(props) => <Notes />} />
          <Route path="/newNote"
          render = {(props) => <NewNote />} />
          <Route path="/notes/:id/edit" component={EditNote}/>
          <Route path="/notes/:id" component={ViewNote}/>
        </Switch>
      </div>
    );
  }
}

export default App;
