import React, { Component } from "react";
import "./App.css";
import { Route, withRouter, Switch } from "react-router-dom";
import { CreateView, NoteView, ListView } from "./views";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={ListView} />
          <Route path="/add" render={props => <CreateView {...props} />} />
          <Route path="/:id" render={props => <NoteView {...props} />} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
