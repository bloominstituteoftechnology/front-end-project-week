import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import ListView from "./ListView/ListView";
import Navigation from "./Navigation/Navigation";
import NoteView from "./NoteView/NoteView";
import EditNote from "./EditNote/EditNote";
import CreateNoteView from "./CreateNote/CreateNoteView";
import Register from "./Register/Register";
import Login from "./Login/Login";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <div className="mainViews">
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/home" component={ListView} />
            <Route exact path="/note/:id" component={NoteView} />
            <Route exact path="/create" component={CreateNoteView} />
            <Route exact path="/edit/:id" component={EditNote} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
