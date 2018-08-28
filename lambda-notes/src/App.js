import React, { Component } from "react";
import Menu from "./Components/Menu";
import NoteList from "./Components/NoteList";
import NewNote from "./Components/NewNote";
import EditNote from "./Components/EditNote";
import { Route } from "react-router-dom";
// import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: [],
      notetitle: "",
      notebody: "",
      id: null
    };
  }

  inputHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  submitNote = () => {
    let each = this.state.notes[this.state.notes.length - 1].id;
    this.setState({ id: each }, function() {
      let notes = this.state.notes.slice();
      let id = this.state.id;
      if (this.state.eachtitle !== "" || this.state.eachbody !== "") {
        id++;
        notes.push({
          id: id,
          title: this.state.eachtitle,
          text: this.state.eachbody
        });
        this.setState({ notes, eachtitle: "", eachbody: "", id });
      }
    });
  };

  render() {
    return (
      <div className="App">
        <Menu />
        <Route
          exact
          path="/"
          render={props => <NoteList {...props} notes={this.state.notes} />}
        />
        <Route
          exact
          path="/newnote"
          render={props => (
            <NewNote
              {...props}
              inputHandler={this.inputHandler}
              submitNote={this.submitNote}
            />
          )}
        />
        <Route
          exact
          path="/notes/:id"
          render={props => <EditNote {...props} notes={this.state.notes} />}
        />
      </div>
    );
  }
}

export default App;
