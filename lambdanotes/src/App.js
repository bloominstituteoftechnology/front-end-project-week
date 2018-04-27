import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import axios from "axios";
import Sidebar from "./components/Sidebar/Sidebar";
import NotesList from "./components/NotesList/NotesList";
import NoteView from "./components/NoteView/NoteView";
import CreateNote from "./components/CreateNote/CreateNote";
import EditNote from "./components/EditNote/EditNote";

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
          {/* _____NOTESLIST ROUTE_____ */}
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

          {/* _____NOTEVIEW ROUTE______ */}
          <Route
            path="/note/:id"
            render={({ match }) => (
              <NoteView getNotes={this.getNotes} match={match} />
            )}
          />

          {/* _____CREATENOTE ROUTE______ */}
          <Route
            path="/create"
            render={() => (
              <CreateNote
                getNotes={() => this.componentDidMount()}
                // notes={this.state.notes}
              />
            )}
          />

          {/* _____EDITNOTE ROUTE______ */}
          <Route
            path="/edit"
            render={({ location }) => (
              <EditNote getNotes={this.getNotes} location={location} />
            )}
          />

          {/* ____DEFAULT ROUTE_____ */}
          <Route
            component={() => <h1 className='App_default'>There are no notes here, turn back!</h1>}
          />
        </Switch>
      </div>
    );
  }
}
