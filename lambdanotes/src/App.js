import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import Sidebar from "./components/Sidebar/Sidebar";
import NotesList from "./components/NotesList/NotesList";
import NoteView from "./components/NoteView/NoteView";
import CreateNote from "./components/CreateNote/CreateNote";

export default class App extends Component {
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
      .get(`http://localhost:5000/notes`)
      .then(response => {
        // console.log('response:', response);
        this.setState({ notes: response.data });
      })
      .catch(error => {
        console.error("Error getting notes!", error);
      });
  };

  render() {
    return (
      <div>
        <Sidebar />
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <NotesList
                getNotes={() => this.componentDidMount()}
                notes={this.state.notes}
              />
            )}
          />
          <Route path="/note/:id" component={NoteView} />
          <Route
            path="/create"
            render={() => (
              <CreateNote
                getNotes={() => this.componentDidMount()}
                // notes={this.state.notes}
              />
            )}
          />
          <Route
            component={() => <h1>There are no notes here, turn back!</h1>}
          />
        </Switch>
      </div>
    );
  }
}
