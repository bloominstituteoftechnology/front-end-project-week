import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import DisplayNotes from "./components/DisplayNotes";
import "./App.css";
import sampleNotes from "./sample-notes";
import { NewNote } from "./components/NewNote";
import { ViewNote } from "./components/ViewNote";
import { EditNote } from "./components/EditNote";
import { SideBar } from "./components/SideBar";
import { Landing } from "./components/Landing";
import base from "./base";

class App extends Component {
  state = {
    notes: []
  };

  // sync to firebase db and update changes live
  componentDidMount() {
    this.ref = base.syncState("/", {
      context: this,
      state: "notes",
      isArray: true
    });
  }

  loadSampleNotes = () => {
    this.setState({ notes: sampleNotes });
  };

  addNote = data => {
    data = { ...data, id: Number(this.state.notes.length + 1) };
    const notes = this.state.notes;
    notes.push(data);
    this.setState({ notes });
  };

  deleteNote = id => {
    const tempNotes = this.state.notes;
    const notes = tempNotes.filter(note => note.id !== id);
    this.setState({ notes });
  };

  updateNote = note => {
    const notes = this.state.notes;
    notes.map(item => {
      if (item.id === parseInt(note.id, 10)) {
        if (item.title) item.title = note.title;
        if (item.text) item.text = note.text;
      }
    });
    this.setState({ notes });
  };

  handleExport = () => {
    let csvExport = "data:text/csv;charset=utf-8, Title,Text,Id\r\n";
    const exportedNotes = this.state.notes;
    exportedNotes.forEach(rows => {
      let row = Object.values(rows).join(". ");
      csvExport += row + "\r\n";
    });
    return encodeURI(csvExport);
  };

  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="row">
            <SideBar export={this.handleExport} />
            <Switch>
              <Route exact path="/" component={Landing} />
              <Route
                exact
                path="/displayNotes"
                render={props => (
                  <DisplayNotes {...props} notes={this.state.notes} />
                )}
              />
              <Route
                exact
                path="/createNewNote"
                render={props => <NewNote {...props} addNote={this.addNote} />}
              />
              <Route
                exact
                path="/viewnote/:id"
                render={props => (
                  <ViewNote
                    {...props}
                    notes={this.state.notes}
                    deleteNote={this.deleteNote}
                  />
                )}
              />
              <Route
                exact
                path="/editNote/:id"
                render={props => (
                  <EditNote
                    {...props}
                    notes={this.state.notes}
                    updateNote={this.updateNote}
                  />
                )}
              />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
