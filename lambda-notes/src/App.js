import React, {Component} from "react";
import {Route, Switch} from "react-router-dom";
import axios from "axios";
import "./App.css";

import Menu from "./components/Menu";
import ListView from "./components/ListView";
import NewNote from "./components/NewNote";
import NoteView from "./components/NoteView";

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: []
    };
  }

  componentDidMount = () => {
    console.log("CDM: Notes fetched", this.state.notes);
    this.fetchNotes();
  };

  fetchNotes = () => {
    axios
      .get("https://fe-notes.herokuapp.com/note/get/all")
      .then(response => this.setState({notes: response.data}))
      .catch(err => console.log(err));
  };

  viewNote = (e, id) => {
    console.log(id);
    axios
      .get(`https://killer-notes.herokuapp.com/note/get/${id}`)
      // .then(this.fetchNotes())
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="App">
        <Menu />

        <div className="display">
          <Switch>
            <Route
              path="/new"
              render={props => <NewNote fetchNotes={this.fetchNotes} />}
            />

            <Route
              path="/all"
              render={props => (
                <ListView notes={this.state.notes} viewNote={this.viewNote} />
              )}
            />

            <Route
              path="/:id"
              render={props => <NoteView {...props} notes={this.state.notes} />}
            />
          </Switch>
          {/* <ListView notes={this.state.notes} /> */}
        </div>
      </div>
    );
  }
}

export default App;
