import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import uuid from "uuid";

import { Route } from "react-router-dom";
import { Link } from "react-router-dom";
import NoteList from "./Component/NoteList";
import NoteForm from "./Component/NoteForm";

const specId = uuid();

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: [
        {
          id: specId,
          header: "Testing out New App",
          content: "This is my new note app for front end project week"
        },
        {
          id: specId,
          header: "Things to See in NYC",
          content: "The MET, Central Park, Financial District"
        }
      ],
      note: ""
    };
  }

  changeNote = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  addNote = event => {
    event.preventDefault();
    const notes = this.state.notes.slice();
    this.setState({ notes, note: "" });
  };

  render() {
    //Build out sidebar
    //Route Notelist
    //Route NoteForm

    return (
      <div className="App">
        <aside className="sidebar-left">
          <h1>Lambda Notes</h1>
          <Link to={"/"}>
            <button>View Your Notes</button>
          </Link>
          <Link to={"/noteform"}>
            <button>Create New Note</button>
          </Link>
        </aside>
        <div className="notes-container">
          <Route
            exact
            path="/"
            render={() => {
              return <NoteList notes={this.state.notes} />;
            }}
          />
          <Route exact path="/noteform" component={NoteForm} />
        </div>
      </div>
    );
  }
}

export default App;
