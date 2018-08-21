import React, { Component } from "react";
import "./App.css";
import Nav from "./Nav Links/Nav";
import NotesHolder from "./Home/HomePage/NotesHolder";
import NewNotePage from "./New Note/NewNotePage";
import { Route } from "react-router-dom";
import Notes from "./Notes/NotesData";
import ViewNote from "./ViewNote/ViewNote";
import EditNote from "./ViewNote/Edit Note/EditNote";

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: Notes,
      deleting: false,
      title: "",
      content: "",
      cardcontent: "",
      id: null,
      editContent: "",
      editTitle: ""
    };
  }
  addNote = () => {
    let newId = this.state.notes[this.state.notes.length - 1].id;
    console.log(newId);
    this.setState({ id: newId }, function() {
      let notes = this.state.notes.slice();
      let id = this.state.id;
      if (
        this.state.title !== "" ||
        this.state.cardcontent !== "" ||
        this.state.content !== ""
      ) {
        id++;
        notes.push({
          id: id,
          title: this.state.title,
          cardcontent: this.state.cardcontent,
          content: this.state.content
        });
        this.setState({ notes, title: "", content: "", cardcontent: "", id });
      }
    });
  };
  inputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  deleteBox = () => {
    let deleting = !this.state.deleting;
    this.setState({ deleting });
  };

  deleteNote = id => {
    let copiedNote = this.state.notes.slice();
    let notesLeft = copiedNote.filter(note => note.id != id);
    console.log(notesLeft);
    this.setState({ notes: notesLeft, deleting: false });
  };
  noteEdit = id => {
    let copiedNote = this.state.notes.slice();
    let noteedit = copiedNote.find(note => note.id === id);
    this.setState({
      titleEdit: noteedit.title,
      contentEdit: copiedNote.content
    });
  };

  revisions = id => {
    let copiedNote = this.state.notes.slice();
    let noteedit = copiedNote.find(note => note.id === id);
    noteedit.title = this.state.titleEdit;
    noteedit.content = this.state.contentEdit;
    this.setState({ notes: copiedNote });
  };

  render() {
    return (
      <div className="App">
        <div className="nav-bar">
          <Nav />
        </div>
        <div className="pages">
          <Route
            exact
            path="/"
            render={props => (
              <NotesHolder {...props} notes={this.state.notes} />
            )}
          />
          <Route
            path="/create-new"
            render={props => (
              <NewNotePage
                {...props}
                notes={this.state.notes}
                handleInputChange={this.inputChange}
                handleAddNote={this.addNote}
                value={this.state.notes}
              />
            )}
          />
          <Route
            exact
            path="/view-note/:id"
            render={props => (
              <ViewNote
                {...props}
                noteEdit={this.noteEdit}
                notes={this.state.notes}
                deleteBox={this.deleteBox}
                deleting={this.state.deleting}
                deleteNote={this.deleteNote}
              />
            )}
          />
          <Route
            path="/view-note/edit/:id"
            render={props => 
                <EditNote 
                  {...props} 
                  notes={this.state.notes} 
                  handleInputChange={this.inputChange}
                  titleEdit={this.state.titleEdit}
                  contentEdit={this.state.contentEdit}
                  revisions={this.revisions}
                  />}
          />
        </div>
      </div>
    );
  }
}

export default App;
