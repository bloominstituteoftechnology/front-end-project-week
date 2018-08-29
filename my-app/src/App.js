import React, { Component } from "react";
import "./App.css";
import YourNotes from "./components/YourNotes/YourNotes";
import axios from "axios";
import { Route } from "react-router-dom";
import Home from "./components/Home/Home";
import CreateNote from "./components/CreateNote/CreateNote";

const URL = "https://killer-notes.herokuapp.com/note/get/all";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: []
    };
  }

  componentDidMount() {
    axios.get(URL).then(response => {
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
        <Route path="/createnote" render={props => <CreateNote {...props} />} />
      </div>
    );
  }
}

export default App;
