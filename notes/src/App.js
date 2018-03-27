import React, { Component } from "react";
import "./App.css";
import Left from "./components/Left";
import { Route } from "react-router-dom";
import ListView from "./components/ListView";
import CreateNewView from "./components/CreateNewView";
import NoteView from "./components/NoteView";
import EditView from "./components/EditView";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Left />
        <Route path="/" component={ListView} exact />
        <Route Path="/createnewview" component={CreateNewView} />
        <Route path="/noteview" component={NoteView} />
        <Route path="/editview" component={EditView} />
      </div>
    );
  }
}

export default App;

// Route set up for components
