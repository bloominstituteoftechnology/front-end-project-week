import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import dummyData from "./dummyData";
import uuid from "uuid";
import { Route } from "react-router-dom";
import { Link } from "react-router-dom";
import NoteList from "./Component/NoteList";
import NoteForm from "./Component/NoteForm";
import OneNote from "./Component/OneNote";
import EditNote from "./Component/EditNote";
import DeleteNote from "./Component/DeleteNote";
// import EditNote from "./Component/EditNote";
// import SingleNote from "./Component/SingleNotes";

// import EditNote from "./Component/EditNote";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: dummyData,
      _id: uuid(),
      title: "",
      textBody: ""
    };
  }

  changeNote = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  addNote = event => {
    event.preventDefault();
    const notes = this.state.notes;
    notes.push({
      _id: this.state._id,
      title: this.state.title,
      textBody: this.state.textBody
    });
    this.setState({ notes, _id: "", title: "", textBody: "" });
  };

  handleEdit = (event, id, push) => {
    event.preventDefault();

    const notes = this.state.notes.map(note => {
      if (note._id === id) {
        const editedNote = { ...note };
        if (this.state.title) editedNote.title = this.state.title;
        if (this.state.textBody) editedNote.textBody = this.state.textBody;
        return editedNote;
      }
      return note;
    });

    this.setState({
      notes,
      title: "",
      textBody: ""
    });
    push(`/notes/${id}`);
  };


  // handleDelete = (event, id, push) => {
  //   event.preventDefault();
  //   // const 
  // }



  render() {
    //Build out sidebar
    //Route Notelist
    //Route NoteForm
    return (
      <div className="App">
        {/* Sidebar Container */}
        <aside className="sidebar-left">
          <h1>Lambda Notes</h1>
          <Link to={"/"}>
            <button>View Your Notes</button>
          </Link>
          <Link to={"/noteform"}>
            <button>Create New Note</button>
          </Link>
        </aside>

        {/* Note List and Form Container */}
        <div className="notes-container">
          <Route
            exact
            path="/"
            render={props => {
              return <NoteList {...props} notes={this.state.notes} />;
            }}
          />
          <Route
            exact
            path="/noteform"
            render={props => {
              return (
                <NoteForm
                  {...props}
                  handleAddNote={this.addNote}
                  handleNoteChange={this.changeNote}
                  _id={this.state._id}
                  title={this.state.title}
                  textBody={this.state.textBody}
                />
              );
            }}
          />

          <Route
            exact
            path="/notes/:id"
            render={props => {
              return <OneNote {...props} notes={this.state.notes} />;
            }}
          />

          <Route
            exact
            path="/notes/:id/editnote"
            render={props => {
              return (
                <EditNote
                  {...props}
                  changeNote={this.changeNote}
                  handleEdit={this.handleEdit}
                />
              );
            }}
          />

          <Route
            exact
            path="/notes/:id/deletenote"
            render={props => {
              return (
                <DeleteNote 
              notes={this.state.notes} />
            );
            }}
          />
      
        </div>
      </div>
    );
  }
}

export default App;
