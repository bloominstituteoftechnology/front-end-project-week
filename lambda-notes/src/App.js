import React, { Component } from 'react';
import { Route } from "react-router-dom";
import Navigation from "./Views/Navigation";
import AllNotes from "./Views/AllNotes";
import NewNote from "./Components/NewNote"
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="/" component={Navigation} />
        <Route exact path="/" component={AllNotes} />
        <Route exact path="/add-note" component={NewNote} />
      </div>
    )
  }
}
