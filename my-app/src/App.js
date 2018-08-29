import React, { Component } from "react";
import "./App.css";
import YourNotes from "./components/YourNotes/YourNotes";
import axios from "axios";
import { Route } from "react-router-dom";
import Home from "./components/Home/Home";
import CreateNote from "./components/CreateNote/CreateNote";
import EditNote from "./components/EditNote/EditNote";
import NoteCard from "./components/YourNotes/NoteCard";

const URL = "https://killer-notes.herokuapp.com/note/get/all";

class App extends Component {
  constructor(props) {
    super(props);
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

  updateHandle = notes => {
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
            <CreateNote {...props} updateHandle={this.updateHandle} />
          )}
        />
        <Route
          path="/editnote"
          render={props => (
            <EditNote {...props} updateHandle={this.updateHandle} />
          )}
        />
        <Route
        path="/noteview"
        render={props => (
          <NoteCard {...props} />
        )} 
        />
      </div>
    );
  }
}

export default App;
