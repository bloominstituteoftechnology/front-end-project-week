import React, { Component } from "react";
import { Route } from "react-router-dom";
import "./App.css";

import NavigationBar from "./components/Navigation/NavigationBar";
import SingleNoteView from "./views/SingleNoteView";
import NewNoteView from "./views/NewNoteView";
import ListView from "./views/ListView";
import EditNoteView from "./views/EditNoteView";

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <NavigationBar />

        <div className="content-container">
          <div className="content-wrapper">
            <Route exact path="/" component={ListView} />
            <Route path="/notes/:id" component={SingleNoteView} />
            <Route path="/create" component={NewNoteView} />
            <Route path="/edit/:id" component={EditNoteView} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
