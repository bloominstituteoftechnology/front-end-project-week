import React, { Component } from "react";
import "./App.css";
import YourNotes from "./components/YourNotes/YourNotes";
import axios from "axios";
import { Route } from "react-router-dom";
import Home from "./components/Home/Home";
import CreateNote from "./components/CreateNote/CreateNote";
import EditNote from "./components/EditNote/EditNote";
import NoteView from "./components/NoteView/NoteView";

const URL = "https://killer-notes.herokuapp.com/note/get/all";

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: []
    };
  }

  componentDidMount() {
    axios
      .get(URL)
      .then(response => {
        console.log(response);
        this.setState({ notes: response.data });
      })
      .catch(err => console.log("Error:", err));
  }

  // updateHandle = () => {
  //   axios
  //   .get(URL)
  //   .then(response => {
  //     console.log(response);
  //     this.setState({ notes: response.data });
  //   })
  //   .catch(err => console.log("Error:", err));
  // }

  updateHandle = newNote => {
    const notes = this.state.notes.slice();
    notes.push(newNote);
    this.setState({ notes });
  };

  editHandle = editNote => {
    const notes = this.state.notes.slice();
    notes.push(editNote);
    this.setState({ notes });
  };

  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route
          path="/yournotes"
          render={props => <YourNotes {...props} notes={this.state.notes} />}
        />
        <Route
          path="/createnote"
          render={props => (
            <CreateNote {...props} updateHandle={this.updateHandle} notes={this.state.notes} />
          )}
        />
        <Route
          path="/editnote/:monkey"
          render={props => (
            <EditNote {...props} updateHandle={this.updateHandle} />
          )}
        />
        <Route
        path="/noteview/:monkey"
        render={props => (<NoteView  {...props} notes={this.state.notes} />)} 
        />
        <Route

        />
      </div>
    );
  }
}

export default App;
