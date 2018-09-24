import React, { Component } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import SideView from "./components/SideView";
import NotesForm from "./components/NotesForm";
import CreateNote from "./components/CreateNote";
import SelectedNote from "./components/SelectedNote";
import axios from "axios";

class App extends Component {
  constructor() {
    super();
    this.state = {
      notesInfo: []
    };
  }
  componentDidMount() {
    axios
      .get("https://killer-notes.herokuapp.com/note/get/all")
      .then(response => {
        this.setState({ notesInfo: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }
  handleInfo = data => this.setState({ notesInfo: data });

  render() {
    return (
      <div className="App">
        <Route
          exact
          path="/notes"
          render={props => (
            <div>
              <NotesForm {...props} notes={this.state.notesInfo} />
            </div>
          )}
        />
        <Route
          exact
          path="/create"
          render={props => (
            <div>
              <CreateNote {...props} handleInfo={this.handleInfo} />
            </div>
          )}
        />
        <Route
          exact
          path="/notes/:id"
          render={props => (
            <div>
              <SelectedNote {...props} handleInfo={this.handleInfo} />
            </div>
          )}
        />
        <SideView />
      </div>
    );
  }
}

export default App;
