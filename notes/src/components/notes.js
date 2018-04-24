import React, { Component } from "react";
import SideBar from "./sidebar";
import ListView from "./listview";
import CreateNote from "./createnote";
import ViewCard from "./viewcard";
import "./notes.css";

export default class Notes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      view: "create",
      currID: 0,
      currentCard: 0
    };
  }

  addNote = (title, text) => {
    let id = this.state.currID;
    let note = { title, text, id };
    this.state.notes.push(note);
    this.setState({ view: "list", currID: this.state.currID + 1 });
  };

  changeToList = () => {
    this.setState({ view: "list" });
  };

  changeToCreate = () => {
    this.setState({ view: "create" });
  };

  removeAllNotes = () => {
    this.setState({ notes: [] });
  };

  componentDidMount() {}

  render() {
    if (this.state.view === "list") {
      return (
        <div className="full-container">
          <SideBar
            changeToList={this.changeToList}
            changeToCreate={this.changeToCreate}
            removeAllNotes={this.removeAllNotes}
          />
          <ListView notes={this.state.notes} />
        </div>
      );
    }
    if (this.state.view === "create") {
      return (
        <div className="full-container">
          <SideBar
            changeToList={this.changeToList}
            changeToCreate={this.changeToCreate}
            removeAllNotes={this.removeAllNotes}
          />
          <CreateNote addNote={this.addNote} />
        </div>
      );
    }
    if (this.state.view === "view") {
      return (
        <div className="full-container">
          <SideBar
            changeToList={this.changeToList}
            changeToCreate={this.changeToCreate}
            removeAllNotes={this.removeAllNotes}
          />
          <ViewCard note={this.state.notes[this.state.currentCard]} />
        </div>
      );
    }
    return <h1>Something didn't work</h1>;
  }
}
