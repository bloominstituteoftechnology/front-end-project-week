import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route } from "react-router-dom";
import { Link } from "react-router-dom";
import NoteList from "./Component/NoteList";

const noteListArr = [
  {
    header: "Testing out New App",
    content: "This is my new note app for front end project week"
  },
  {
    header: "Things to See in NYC",
    content: "The MET, Central Park, Financial District"
  }
];

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: noteListArr,
    };
  }

  render() {
    //Build out sidebar
    //Route Notelist
    //Route NoteForm

    return (
      <div className="App">
        <aside className="sidebar-left">
          contents of sidebar will go here
          <h1>Lambda Notes</h1>
          <Link to={"/"}>
            <button>View Your Notes</button>
          </Link>
          <Link to={"/NoteForm"}>
            <button>Create New Note</button>
          </Link>
        </aside>
        <div className="notes-container">
          <h2>Your Notes</h2>
          <Route path="/" component={NoteList} />
        </div>
      </div>
    );
  }
}

export default App;
