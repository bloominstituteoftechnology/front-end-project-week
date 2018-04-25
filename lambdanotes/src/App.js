import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import NotesList from "./components/NotesList/NotesList";
import Sidebar from "./components/Sidebar/Sidebar";

export default class App extends Component {
  constructor() {
    super();
    notesList: [
      {
        id: 0,
        title: "This is a sample note!",
        content: "something something notetaking"
      },
      {
        id: 1,
        title: "Test for note app!",
        content: "something something notetaking"
      },
      {
        id: 2,
        title: "Hey it's working!",
        content: "something something notetaking"
      },
      {
        id: 3,
        title: "Remember these notes!",
        content: "something something notetaking"
      },
      {
        id: 4,
        title: "Start adding more functionality!",
        content: "something something notetaking"
      },
      {
        id: 5,
        title: "Notes on notes on notes!",
        content: "something something notetaking"
      }
    ];
  }

  render() {
    return (
      <div>
        <Sidebar />
        <Switch>
          <Route exact path="/" component={NotesList} notesList={this.state.notesList} />
          {/* <Route path ='/:id' component={Note} /> */}
          {/* <Route path ='/create' component={CreateNote} /> */}
          <Route
            component={() => <h1>There are no notes here, turn back!</h1>}
          />
        </Switch>
      </div>
    );
  }
}

// export default App;
