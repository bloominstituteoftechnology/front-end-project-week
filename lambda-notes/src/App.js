import React, { Component } from "react";
import { Route } from "react-router-dom";
import Home from "./components/Home/Home";
import CreateNote from "./components/CreateNote/CreateNote";
import Note from "./components/Note/Note";
import EditNote from "./components/EditNote/EditNote";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import "./App.css";

class App extends Component {

  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route exact path="/CreateNote" component={CreateNote} />
        <Route exact path="/notes/:id" component={Note} />
        <Route exact path="/EditNote/:id" component={EditNote} />
      </div>
    )
  }
}

export default withRouter(connect(null)(App));
