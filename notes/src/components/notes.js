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

  viewNote = id => {
    this.setState({ currentCard: id, view: "view" });
  };

  removeNote = id => {
    let filteredList = this.state.notes.filter(e => e.id !== id);
    this.setState({ view: "list", notes: filteredList });
  };

  removeAllNotes = () => {
    console.log("Deleted Notes");
    this.setState({ view: "list", notes: [] });
  };

  render() {
    if (this.state.view === "list") {
      return (
        <div className="full-container">
          <SideBar
            changeToList={this.changeToList}
            changeToCreate={this.changeToCreate}
            removeAllNotes={this.removeAllNotes}
          />
          <ListView notes={this.state.notes} viewNote={this.viewNote} />
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
          <ViewCard
            note={this.state.notes.find(e => e.id === this.state.currentCard)}
            removeNote={this.removeNote}
          />
        </div>
      );
    }
    return <h1>Something didn't work</h1>;
  }
}
