import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom";
import { Navigation, NotesList, AddNote, Note } from "./components";

class App extends Component {

  render() {
    return (
      <div className="App">
        <Navigation />
        <Switch>
          <Route exact path="/" component={NotesList}/>
          <Route path="/addnote" component={AddNote}/>
          <Route path="/:id" component={Note}/>
        </Switch>
      </div>
    );
  }
}

export default App;
