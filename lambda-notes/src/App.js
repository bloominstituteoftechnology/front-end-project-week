import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import ListView from './Components/ListView/ListView'
import CreateNote from './Components/CreateNote/CreateNote'
import NoteView from "./Components/NoteView/NoteView"


class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={ListView}/>
          <Route exact path="/new" component={CreateNote}/>
          <Route exact path="/note/1" component={NoteView}/>
        </Switch>
      </div>
    );
  }
}

export default App;


