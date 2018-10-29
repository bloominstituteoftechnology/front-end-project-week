import React, { Component } from "react";
import "./App.css";
import { Route } from "react-router-dom";
import { CreateView, EditView, NoteView, ListView } from "./views";
import { Sidebar } from "./components";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Lambda Notes</h1>
        </header>
        <Route path="/" component={Sidebar} />
        <Route exact path="/" component={ListView} />
        <Route path="/add" component={CreateView} />
        <Route path="/edit" component={EditView} />
        <Route path="/:id" component={NoteView} />
      </div>
    );
  }
}

export default App;
