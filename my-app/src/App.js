import React, { Component } from "react";
import "./App.css";
import YourNotes from "./components/YourNotes/YourNotes";
import dummyData from "./dummyData";
import { Route } from "react-router-dom";
import Home from "./components/Home/Home";
import CreateNote from "./components/CreateNote/CreateNote";

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: []
    };
  }

  componentDidMount() {
    this.setState({ notes: dummyData });
  }

  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route path="/yournotes" render={props => <YourNotes {...props} notes={this.state.notes} />} />
        <Route path="/createnote" render={props => <CreateNote {...props} />} />
      </div>
    );
  }
}

export default App;
