import React, { Component } from "react";
import styled from "styled-components";
import { Route, Link } from "react-router-dom";

import "./App.css";

import SidePane from "./components/SidePane";
import Notes from "./NoteData";
import NotesView from "./components/NotesView";
import SingleView from "./components/SingleView";
import CreateNote from "./components/CreateNote";
import EditNote from "./components/EditNote";
import DeleteNote from "./components/DeleteNote";
//Styles================================
const StyledApp = styled.div`
  background-color: #e3e3e3;
  display: flex;
  flex-wrap: nowrap;
  color: #434343;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  h2 {
    font-weight: bold;
    font-size: 24px;
    margin-left: 1px;
    margin-top: 30px;
    width: 70%;
    height: 40px;
  }
`;
//=====================================

class App extends Component {
  state = {
    notes: [],
    newNote: {
      title: "",
      body: ""
    },
    count: 6
  };
  componentDidMount() {
    this.setState({ notes: Notes });
  }

  handleInput = ({ target }) => {
    this.setState(prevState => ({
      newNote: { ...prevState.newNote, [target.name]: target.value }
    }));
  };
  
//addNote does this thing about this

  addNote = event => {
    const newNotes = this.state.newNote;
    const count = ++this.state.count;
    const notes = this.state.notes.slice();
    notes.push({
      id: count,
      title: newNotes.title,
      body: newNotes.body
    });
    this.setState({
      notes,
      count,
      newNote: {
        body: "",
        title: ""
      }
    });
    const str = JSON.stringify(notes);
    localStorage.setItem("notes", str);
  };

  editNote = (newNote, id, push) => {
    const notes = this.state.notes.map(note => {
      if (note.id === Number(id)) return newNote;
      return note;
    });

    this.setState({
      notes,
      newNote: {
        body: "",
        title: ""
      }
    });
    console.log("notes in editNote in App: ", notes);
    push("/");
  };

  deleteNote = (id, push) => {
    let notes = this.state.notes.slice();
    let notesAfterDelete = notes.filter(note => note.id !== Number(id));
    this.setState({ notes: notesAfterDelete });
    console.log(this.state.notes);
    push("/");
  };
  render() {
    return (
      <StyledApp>
        <Route path="/" component={SidePane} />
        <Route
          exact
          path="/"
          render={props => <NotesView {...props} notes={this.state.notes} />}
        />
        <Route
          path="/note/:id"
          render={props => <SingleView {...props} notes={this.state.notes} />}
        />
        <Route
          path="/create"
          render={props => (
            <CreateNote
              {...props}
              newNote={this.state.newNote}
              handleInput={this.handleInput}
              addNote={this.addNote}
              notes={this.state.notes}
            />
          )}
        />
        <Route
          path="/edit/:id"
          render={props => (
            <EditNote
              {...props}
              editNote={this.editNote}
              notes={this.state.notes}
            />
          )}
        />
        <Route
          path="/note/:id/delete"
          render={props => (
            <DeleteNote
              {...props}
              deleteNote={this.deleteNote}
              notes={this.state.notes}
            />
          )}
        />
      </StyledApp>
    );
  }
}

export default App;
