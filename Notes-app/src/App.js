import React, { Component } from "react";
import "./App.css";
import { Route } from "react-router-dom";
import List from "./components/List/list";
import NewForm from "./components/New/newform";
import NoteCard from "./components/Edit/notecard";
import EditNote from "./components/Edit/editnote";

class App extends Component {
  componentDidMount() {}

  render() {
    return (
      <div className="App-container">
        <Route exact path="/" component={List} />
        <Route path="/create" component={NewForm} />
        <Route path="/note/:id" component={NoteCard} />
        <Route path="/edit/:id" component={EditNote} />
      </div>
    );
  }
}

export default App;
