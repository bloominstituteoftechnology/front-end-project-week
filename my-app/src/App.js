import React, { Component } from "react";
import "./App.css";
import YourNotes from "./components/YourNotes/YourNotes";
import dummyData from "./dummyData";
import { Route, Link } from "react-router-dom";
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
        <Link to="/">Home</Link>
        <Route path="/yournotes" render={() => <YourNotes notes={this.state.notes} />} />
      </div>
    );
  }
}

export default App;
