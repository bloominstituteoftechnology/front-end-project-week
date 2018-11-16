import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import { Route, NavLink } from "react-router-dom";
import NoteList from "./components/notelist";
import CreateNote from "./components/createnote";
import NoteView from "./components/noteview";
import EditNote from "./components/editnote";

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: []
    };
  }

  componentDidMount() {
    this.getNotes();
  }

  getNotes = () => {
    axios
      .get("https://fe-notes.herokuapp.com/note/get/all")
      .then(response => {
        // console.log(response.data);
        this.setState({ notes: response.data });
      })
      .catch(err => {
        console.log(err);
      });
  };
  render() {
    return (
      <div className="noteview">
        <div className="sidebar">
          <h1>Lambda</h1>
          <h1>Notes</h1>
          <div className="navigation">
            <NavLink className="sidebarbutton" to="/" onClick={this.getNotes}>
              View Your Notes
            </NavLink>
            <NavLink className="sidebarbutton" to="/create">
              + Create New Note
            </NavLink>
          </div>
        </div>
        <div className="display">
          <Route
            path="/"
            exact
            render={props => <NoteList {...props} notes={this.state.notes} />}
          />
          <Route
            path="/create"
            render={props => (
              <CreateNote {...props} createNewNote={this.createNewNote} />
            )}
          />
          <Route
            path="/viewnote/:id"
            render={props => <NoteView {...props} notes={this.state.notes} />}
          />
          <Route
            path="/edit/:id"
            render={props => (
              <EditNote
                {...props}
                notes={this.state.notes}
                getNotes={this.getNotes}
              />
            )}
          />
        </div>
      </div>
    );
  }
}

export default App;
