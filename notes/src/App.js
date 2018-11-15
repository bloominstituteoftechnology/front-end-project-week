import React, { Component } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import NoteCard from "./components/notes/NoteCard";
import Dashboard from "./components/dashboard/Dashboard";
import Signin from "./components/auth/Signin";
import Signup from "./components/auth/Signup";
import CreateNote from "./components/notes/CreateNote";

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/note/:id" component={NoteCard} />
          <Route path="/login" component={Signin} />
          <Route path="/signup" component={Signup} />
          <Route path="/create" component={CreateNote} />
        </Switch>
      </div>
    );
  }
}

export default App;
