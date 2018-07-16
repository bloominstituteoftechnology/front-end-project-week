import React, { Component } from "react";
import "./App.css";
import SideBar from "./components/sidebar/sidebar";
import { notesData } from "./data";
import Notes from "./components/notes/notes";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: []
    };
  }

  componentDidMount() {
    this.setState({ notes: notesData });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Lambda Notes Front-End-Project</h1>
        </header>
        <SideBar />
        <Notes notes={this.state.notes} />
      </div>
    );
  }
}

export default App;
