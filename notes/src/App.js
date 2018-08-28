import React, { Component } from "react";
import { Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import { testData } from "./testData";
import NoteList from "./components/NoteList";
import CreateNote from "./components/CreateNote";
import Note from "./components/Note";
import SimpleStorage from 'react-simple-storage'

class App extends Component {
  state = {
    notes: testData
  };

  handleCreateNote = note => {
    this.setState(prevState => {
      return {
        notes: prevState.notes.concat(note)
      };
    });
  };


  render() {
    return (
      <div className="App">
      <SimpleStorage parent={this} />
        <Sidebar />
        <Route
          exact
          path="/"
          render={() => <NoteList notes={this.state.notes} />}
        />
        <Route
        exact
          path="/notes"
          render={() => <NoteList notes={this.state.notes} />}
        />
        <Route
          exact
          path="/create"
          render={() => <CreateNote handleSubmit={this.handleCreateNote} />}
        />
        {/* this route will handle the single note view as well as editing and deleting */}
        <Route
         exact
          path="/notes/:index"
          render={props => <Note {...props} notes={this.state.notes} />}
        />
      </div>
    );
  }
}

export default App;
