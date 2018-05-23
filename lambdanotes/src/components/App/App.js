import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import LeftNav from '../LeftNav/LeftNav';
import NotesList from '../NotesList/NotesList';
import ViewNote from '../ViewNote/ViewNote';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path='/' component={LeftNav} />
        <Switch>
          <Route path='/' exact component={NotesList} />
          <Route path='/note/:id' exact component={ViewNote} />
        </Switch>
      </div>
    );
  }
}

export default App;
