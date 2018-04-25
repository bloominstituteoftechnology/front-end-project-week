import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button } from "reactstrap";
import { Route } from "react-router-dom";
import NotesList from "./components/NotesList";
import NewNote from "./components/NewNote";
import EditNote from "./components/EditNote";
import Data from "./components/Data";
import SelectedNotes from "./components/SelectedNotes";

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: []
    };
  }

  componentDidMount() {
    this.setState({ notes: Data });
  }

  render() {
    console.log("from app", this.state.notes);
    return (
      <div className="App">
        <Route exact path="/" component={NotesList} />
        <Route path="/newNote" component={NewNote} />
        <Route path="/editNote" component={EditNote} />
        <Route path="/selectedNotes/:id" component={SelectedNotes} />
      </div>
    );
  }
}

export default App;
