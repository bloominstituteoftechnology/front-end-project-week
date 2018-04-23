import React, { Component } from "react";
import SideBar from "./sidebar";
import ListView from "./listview";
import CreateNote from "./createnote";
import "./notes.css";

export default class Notes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      view: "create"
    };
  }

  addNote = (note) => {
    this.state.notes.push(note);
    this.state.view.setState("list");
  }

  componentDidMount() {}

  render() {
    if (this.state.view === "list") {
      return (
        <div className="full-container">
          <SideBar />
            <ListView notes={this.state.notes} />
        </div>
      );
    }
     if (this.state.view === "create"){
      return (
        <div className="full-container">
          <SideBar />
            <CreateNote view={this.state.view} addNote={this.addNote} />
        </div>
      );
     }
    return <h1>Something didn't work</h1>;
  }
}
