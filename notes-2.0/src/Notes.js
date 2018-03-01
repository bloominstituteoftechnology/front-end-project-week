import React, { Component } from "react";
import DummyData from "./DummyData";
import "./Notes.css";
import CreateNote from "./Components/CreateNote";
import SingleNote from "./Components/SingleNote";
import NoteList from "./Components/NoteList";
import EditNote from "./Components/EditNote";

class Notes extends Component {
  state = {
    notes: DummyData,
    view: {
      notes: false,
      create: false,
      edit: false,
      singleNote: false
    }
  };
  target = null;

  componentDidMount() {
    this.SetViewNotes();
  }
  render() {
    return (
      <div className="container">
        <div className="leftPanel">
          <h1 className="leftHeader">Lambda notes</h1>
          <button onClick={() => this.SetViewNotes()}>View Your Notes</button>
          <button onClick={() => this.SetViewCreate()}>
            + Create New Note
          </button>
        </div>
        {this.state.view.notes ? (
          <NoteList notes={this.state.notes} target={this.handleTarget} />
        ) : null}
        {this.state.view.create ? <CreateNote addNote={this.addNote} /> : null}
        {this.state.view.singleNote ? (
          <SingleNote
            notes={this.state.notes}
            target={this.target}
            deleteNote={this.deleteNote}
            edit={this.editNote}
          />
        ) : null}
        {this.state.view.edit ? (
          <EditNote
            note={this.state.notes[this.target]}
            updateNote={this.updateNote}
          />
        ) : null}
      </div>
    );
  }

  updateNote = updatedNote => {
    let mirror = this.state.notes;
    mirror[this.target] = updatedNote;
    this.setState({
      ...this.state,
      notes: mirror
    });
  };

  editNote = target => {
    this.target = target;
    this.setState({
      ...this.state,
      view: {
        notes: false,
        edit: true,
        create: false,
        singleNote: false
      }
    });
  };
  deleteNote = target => {
    let mirror = this.state.notes;
    mirror.splice(target, 1);
    this.target = null;
    this.setState({
      notes: mirror,
      view: {
        notes: true,
        edit: false,
        create: false,
        singleNote: false
      }
    });
  };

  handleTarget = i => {
    this.target = i;
    this.setState({
      ...this.state,
      view: {
        notes: false,
        edit: false,
        create: false,
        singleNote: true
      }
    });
  };

  addNote = newNote => {
    console.log("newNote : ", newNote);
    this.target = null;
    this.setState({
      notes: [...this.state.notes, newNote],
      view: {
        notes: true,
        edit: false,
        create: false,
        singleNote: false
      }
    });
  };

  SetViewNotes() {
    this.target = null;
    this.setState({
      ...this.state,
      view: {
        notes: true,
        edit: false,
        create: false,
        singleNote: false
      }
    });
  }

  SetViewCreate() {
    this.target = null;
    this.setState({
      ...this.state,
      view: {
        notes: false,
        edit: false,
        create: true,
        singleNote: false
      }
    });
  }
}

export default Notes;
