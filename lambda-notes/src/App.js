import React, { Component } from 'react';
import { Route } from "react-router-dom";
import Navigation from "./Views/Navigation";
import AllNotes from "./Views/AllNotes";
import NewNote from "./Components/NewNote"
import './App.css';
import SingleNoteView from './Views/SingleNoteView';
import UpdateNote from "./Components/UpdateNote"

export default class App extends Component {
  
  render() {
    return (
      <div className="App">
        <Route path="/" component={Navigation} />
        <Route exact path="/" component={AllNotes} />
        <Route exact path="/add-note" component={NewNote} />
        <Route path={`/note/:id`} component={SingleNoteView} />
        <Route path={`/edit/:id`} component={UpdateNote} />
      </div>
    )
  }
}
