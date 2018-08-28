import React, { Component } from "react";
import "./App.css";
import YourNotes from "./components/YourNotes/YourNotes";
import dummyData from "./dummyData";
import { Route } from "react-router-dom";
import Home from "./components/Home/Home";

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
      </div>
    );
  }
}

export default App;
