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

  addNote = note => {
    this.state.notes.push(note);
    console.log(this.state);
    this.setState({ view: "list" });
    this.componentDidMount();
  };

  changeToList = () => {
    this.setState({ view: "list" });
  };

  changeToCreate = () => {
    this.setState({ view: "create" });
  };

  componentDidMount() {}

  render() {
    if (this.state.view === "list") {
      return (
        <div className="full-container">
          <SideBar changeToList={this.changeToList} changeToCreate={this.changeToCreate}/>
          <ListView notes={this.state.notes} />
        </div>
      );
    }
    if (this.state.view === "create") {
      return (
        <div className="full-container">
          <SideBar changeToList={this.changeToList} changeToCreate={this.changeToCreate}/>
          <CreateNote addNote={this.addNote} />
        </div>
      );
    }
    return <h1>Something didn't work</h1>;
  }
}
