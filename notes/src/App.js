import React, { Component } from "react";
import { Route } from "react-router-dom";

import SideBar from "./components/Sidebar";
import Notes from "./components/Notes";
import CreateNote from "./components/CreateNote";
import NotePage from "./components/NotePage";
import EditNote from "./components/EditNote";

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: [
        {
          title: "Green Eggs & Ham",
          text:
            "I do not like green eggs and ham. I do not like them Sam I am. I will not eat them in a house, I will not eat them with a mouse.",
          id: 1
        },
        {
          title: "Miss Polly & Her Dolly",
          text:
            "Miss Polly had a dolly who was sick, sick, sick. So, she took her to the doctor really quick, quick, quick.",
          id: 2
        }
      ],
      newId: 3
    };
  }

  saveNote = (newTitle, newText) => {
    this.setState({
      notes: [
        ...this.state.notes,
        { title: newTitle, text: newText, id: this.state.newId }
      ],
      newId: this.state.newId + 1
    });
  };

  editNote = (newTitle, newText, id) => {
    let updatedNote = this.state.notes.find(note => note.id === id);
    let filteredNotes = this.state.notes.filter(note => note.id !== id);
    this.setState({
      notes: [
        ...filteredNotes,
        { title: newTitle, text: newText, id: updatedNote.id }
      ]
    });
  };

  deleteNote = id => {
    let filteredNotes = this.state.notes.filter(note => note.id !== id)
    this.setState({
      notes: filteredNotes
    })
  }
  render() {
    return (
      <div className="app">
        <SideBar />
        <Route
          exact
          path="/"
          render={props => <Notes {...props} notes={this.state.notes} />}
        />
        <Route
          exact
          path="/create"
          render={props => (
            <CreateNote
              {...props}
              notes={this.state.notes}
              newId={this.state.newId}
              saveNote={this.saveNote}
            />
          )}
        />
        <Route
          exact
          path="/note/:id"
          render={props => <NotePage {...props} notes={this.state.notes} deleteNote={this.deleteNote} />}
        />
        <Route
          exact
          path="/note/:id/edit"
          render={props => (
            <EditNote
              {...props}
              notes={this.state.notes}
              editNote={this.editNote}
            />
          )}
        />
      </div>
    );
  }
}

export default App;
