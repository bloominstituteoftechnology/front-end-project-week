import React, { Component } from "react";
import base from "./rebase";
import SideBar from "./sidebar";
import ListView from "./listview";
import CreateNote from "./createnote";
import ViewCard from "./viewcard";
import EditNote from "./editnote";
import "./notes.css";

export default class Notes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      view: "list",
      currID: 0,
      currentCard: 0
    };
  }

  componentWillMount() {
    base.syncState("/notes", {
      context: this,
      state: "notes",
      asArray: true
    });
  }

  addNote = (title, text) => {
    let id = this.state.currID;
    while (this.state.notes.some(e => e.id === id)) id++;
    let note = { title, text, id };
    this.state.notes.push(note);
    this.setState({
      view: "list",
      currID: this.state.currID + 1,
      notes: this.state.notes
    });
  };

  changeToList = () => {
    this.setState({ view: "list" });
  };

  changeToCreate = () => {
    this.setState({ view: "create" });
  };

  changeToEdit = () => {
    this.setState({ view: "edit" });
  };

  viewNote = id => {
    this.setState({ currentCard: id, view: "view" });
  };

  removeNote = id => {
    let filteredList = this.state.notes.filter(e => e.id !== id);
    this.setState({ view: "list", notes: filteredList });
  };

  removeAllNotes = () => {
    this.setState({ view: "list", notes: [] });
  };

  editNote = note => {
    let filteredList = this.state.notes.filter(e => e.id !== note.id);
    filteredList.push(note);
    this.setState({ view: "list", notes: filteredList });
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
            changeToEdit={this.changeToEdit}
          />
        </div>
      );
    }
    if (this.state.view === "edit") {
      return (
        <div className="full-container">
          <SideBar
            changeToList={this.changeToList}
            changeToCreate={this.changeToCreate}
            removeAllNotes={this.removeAllNotes}
          />
          <EditNote
            note={this.state.notes.find(e => e.id === this.state.currentCard)}
            editNote={this.editNote}
          />
        </div>
      );
    }
    return <h1>Something didn't work</h1>;
  }
}
