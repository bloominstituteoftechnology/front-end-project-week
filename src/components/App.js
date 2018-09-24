import React, { Component } from "react";
import "../style/App.css";
import axios from "axios";
import ListView from "../components/listView";
import { AddNote } from "../components/addNote";
import { Route } from "react-router-dom";
import IndividualNoteComponents from "./individualNoteComponents.js";

class App extends Component {
  state = {
    notes: []
  };

  componentDidMount() {
    axios
      .get(`https://killer-notes.herokuapp.com/note/get/all`)
      .then(response => {
        console.log(response);
        this.setState({ notes: response.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="App">
        <Route
          exact
          path="/"
          render={props => <ListView {...props} notes={this.state.notes} />}
        />
        <Route path="/addnote" component={AddNote} />
        <Route
          path="/note/:id"
          render={props => (
            <IndividualNoteComponents {...props} notes={this.state.notes} />
          )}
        />
      </div>
    );
  }
}

export default App;
