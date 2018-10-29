import React, { Component } from "react";
import "./App.css";

import Notes from "./components/Notes";
class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: [
        {
          tags: ["tag", "other tag"],
          title: "Note title",
          textBody: "This is my note body"
        },
        {
          tags: ["tag", "other tag"],
          title: "Note title 2",
          textBody: "This is my note body 2"
        }
      ]
    };
  }
  render() {
    return (
      <div className="App">
        <Notes notes={this.state.notes} />
      </div>
    );
  }
}

export default App;
