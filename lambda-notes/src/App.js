import React, {Component} from "react";
import {Route, Switch} from "react-router-dom";
import axios from "axios";
import "./App.css";

import Menu from "./components/Menu";
import ListView from "./components/ListView";
import NewNote from "./components/NewNote";
import NoteView from "./components/NoteView";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: []
    };
  }

  componentDidMount = () => {
    // console.log("CDM: Notes fetched", this.state.notes);
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
      .get(`https://fe-notes.herokuapp.com/note/get/${id}`)
      .then(response => this.setState({notes: response.data}))
      .catch(err => console.log(err));
  };

  deleteNote = (e, id) => {
    e.preventDefault();
    axios
      .delete(`https://fe-notes.herokuapp.com/note/delete/${id}`)
      .then(response => this.setState({notes: response.data}))
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
              render={props => (
                <NewNote {...props} fetchNotes={this.fetchNotes} />
              )}
            />

            <Route
              exact
              path="/notes"
              render={props => (
                <ListView notes={this.state.notes} viewNote={this.viewNote} />
              )}
            />

            <Route
              path="/:id"
              render={props => (
                <NoteView
                  {...props}
                  notes={this.state.notes}
                  delete={this.deleteNote}
                />
              )}
            />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
