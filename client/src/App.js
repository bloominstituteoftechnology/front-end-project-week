import React, { Component } from "react";
import axios from "axios";
import { Route } from "react-router-dom";

import "./App.css";
import NotesList from "./components/NotesList";
import NoteForm from "./components/NoteForm";
import Note from "./components/Note";
import Sidebar from "./components/Sidebar";
import NoteView from "./components/NoteView";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: []
    };
  }

  componentDidMount() {
    axios
      .get("https://fe-notes.herokuapp.com/note/get/all")
      .then(res => this.setState({ notes: res.data }))
      .catch(err => console.log(err));
  }

  handleData = data => {
    this.setState({
      notes: data
    });
  };

  render() {
    return (
      <div className="App">
        <div className="home-view">
          <Sidebar />
          <Route
            exact
            path="/"
            render={props => <NotesList {...props} notes={this.state.notes} />}
          />
        </div>
        <Route
          exact
          path="/create"
          render={props => <NoteForm {...props} notes={this.state.notes} />}
        />

        <Route
          exact
          path="/:id"
          render={props => (
            <NoteView
              {...props}
              items={this.state.items}
              notes={this.state.notes}
            />
          )}
        />
      </div>
    );
  }
}

export default App;
