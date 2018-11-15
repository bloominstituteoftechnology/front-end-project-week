import React, { Component } from 'react';
import { Route } from 'react-router-dom'; 
import SideBar from "./Components/Sidebar";
import Notes from "./Components/Notes";
import CreateNote from "./Components/CreateNote";
import NotePage from "./Components/NotePage";
import EditNote from "./Components/EditNote";

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: [
        {
          title: "Joke 1",
          text: "C: DOS, C: DOS run, run DOS run",
          id: 1
        },
        {
          title: "Joke 2",
          text:
            "What do you get when you cross an elephant with a rino? Eliphino.",
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
    let filteredNotes = this.state.notes.filter(note => note.id !== id);
    this.setState({
      notes: filteredNotes
    });
  };
  render() {
    return (
      <div className="App">
        <SideBar />
        <Route
          exact path="/"
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
          render={props => (
            <NotePage
              {...props}
              notes={this.state.notes}
              deleteNote={this.deleteNote}
            />
          )}
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
