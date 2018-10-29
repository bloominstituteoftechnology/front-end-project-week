import React, {Component} from "react";
import {Route} from "react-router-dom";
import axios from "axios";
import "./App.css";

import Menu from "./components/Menu";
import ListView from "./components/ListView";
import NewNote from "./components/NewNote";

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

  render() {
    return (
      <div className="App">
        <Menu />

        <div className="display">
          <Route
            path="/new"
            render={props => <NewNote fetchNotes={this.fetchNotes} />}
          />
          <ListView notes={this.state.notes} />
        </div>
      </div>
    );
  }
}

export default App;
