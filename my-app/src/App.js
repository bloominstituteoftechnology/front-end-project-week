import React, { Component } from "react";
import "./App.css";
import { Route, withRouter, Switch } from "react-router-dom";
import { CreateView, EditView, NoteView, ListView } from "./views";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Lambda Notes</h1>
        </header>
        <Switch>
          <Route exact path="/" component={ListView} />
          <Route path="/add" component={CreateView} />
          <Route path="/edit" component={EditView} />
          <Route path="/:id" component={NoteView} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
