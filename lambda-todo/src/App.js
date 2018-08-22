import React, { Component } from "react";
import "./App.css";
import Nav from "./Nav Links/Nav";
import NotesHolder from "./Home/HomePage/NotesHolder";
import NewNotePage from "./New Note/NewNotePage";
import { Route } from "react-router-dom";
import Notes from "./Notes/NotesData";
import ViewNote from "./ViewNote/ViewNote";
import EditNote from "./ViewNote/Edit Note/EditNote";
import Authenticate from "./Login/Authenticate"; 

class App extends Component {
  constructor(App) {
    super(App);
    this.state = {
      notes: Notes,
      deleting: false,
      title: "",
      content: "",
      tags: "",
      id: null,
      contentEdit: "",
      tagsEdit: "", 
      titleEdit: "", 
      completed: false, 
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
    let noteedit = copiedNote.find(note => note.id == id);
    this.setState({
      titleEdit: noteedit.title,
      contentEdit: noteedit.content, 
      tagsEdit: noteedit.tags, 
    });
  };

  revisions = id => {
    let copiedNote = this.state.notes.slice();
    let noteedit = copiedNote.find(note => note.id == id);
    noteedit.title = this.state.titleEdit;
    noteedit.content = this.state.contentEdit;
    noteedit.tags = this.state.tagsEdit
    this.setState({ notes: copiedNote });
  };
  complete = () =>{
    let completed = !this.state.completed; 
    this.setState({completed})
  }
  completeNote = id =>{
    let copiedNote = this.state.notes.slice(); 
    let noteComplete = copiedNote.filter(note => note.id !== id);
    this.setState({notes: noteComplete, completed: false}) 
  }

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
              <NotesHolder
               {...props}
                notes={this.state.notes} 
                complete={this.complete}
                completed={this.state.completed}
                value={this.state.completed}
                />
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
                  tagsEdit={this.state.tagsEdit}
                  revisions={this.revisions}
                  />}
          />
        </div>
      </div>
    );
  }
}

export default Authenticate(App);
