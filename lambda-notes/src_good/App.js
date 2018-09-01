import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import "./App.css";

import {
  ListNotes,
  NewNote,
  Details,
  EditNote,
  DeleteNote
} from "./components";

class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 45,
      hideDetails: true,
      //ADD some static data to strt with...wanted to use local storage but may be to late now
      notes: [
        {
          id: 0,
          title: "Clip",
          body:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
          id: 1,
          title: "Clop",
          body:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
          id: 2,
          title: "Bingo",
          body:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
          id: 3,
          title: "Bongo",
          body:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
          id: 4,
          title: "Bongo",
          body:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
          id: 5,
          title: "Bongo",
          body:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
          id: 6,
          title: "Bongo",
          body:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }
      ]
    };
  }

  getNoteDetails = id => {
    return this.state.notes.find(note => {
      return note.id === parseInt(id, 10);
    });
    //parseInt(string, radix); 10 is the radix or base
  };

  disableDelete = () => {
    this.setState({
      deleteEnabled: false
    });
  };

  enableDelete = () => {
    this.setState({
      deleteEnabled: true
    });
  };

  deleteNote = id => {
    let newArr = this.state.notes.slice().filter(note => note.id !== id);
    this.setState({
      notes: newArr,
      deleteEnabled: false
    });
  };

  newNote = newNote => {
    // console.log('editnote', newNote);
    let newArr = this.state.notes.slice();
    newArr.push(newNote);
    this.setState({
      notes: newArr,
      count: this.state.count + 1
    });
  };

  editNote = noteEdit => {
    // console.log('editnote', noteEdit.id);
    let newArr = this.state.notes.slice();
    // let obj = newArr.filter(note => noteEdit.id === note.id)
    // console.log(obj)
    let position = newArr.findIndex(note => note.id === noteEdit.id);
    // console.log(position)
    newArr[position] = noteEdit;
    this.setState({
      notes: newArr,
      count: this.state.count + 1
    });
  };

  render() {
    return (
      <div className="top">
        <div className="left-menu">
          <h1>Lambda Notes</h1>
          <Link className="menu-item" to="/listnotes">
            View Your Notes
          </Link>
          <Link className="menu-item" to="/new-note">
            + Create New Note
          </Link>
        </div>

        <div className="right-display">
          <Route
            exact
            path="/listnotes/"
            render={() => {
              return <ListNotes notes={this.state.notes} />;
            }}
          />

          <Route
            exact
            path="/new-note"
            render={() => {
              return (
                <NewNote
                  count={this.state.count}
                  newNote={this.newNote}
                  notes={this.state.notes}
                />
              );
            }}
          />

          <Route
            path="/listnotes/:noteId"
            exact={!this.state.deleteEnabled}
            render={note => {
              let single = this.getNoteDetails(note.match.params.noteId);
              return <Details enableDelete={this.enableDelete} note={single} />;
            }}
          />

          <Route
            exact
            path="/listnotes/:noteId/edit"
            render={note => {
              let single = this.getNoteDetails(note.match.params.noteId);
              return (
                <EditNote
                  count={this.state.count}
                  editNote={this.editNote}
                  note={single}
                />
              );
            }}
          />
        </div>

        {this.state.deleteEnabled ? (
          <div className="delete">
            <Route
              path="/listnotes/:noteId/delete"
              render={note => {
                let single = this.getNoteDetails(note.match.params.noteId);
                return (
                  <div>
                    <DeleteNote
                      deleteNote={this.deleteNote}
                      disableDelete={this.disableDelete}
                      note={single}
                    />
                    {/* <Details note={single} /> */}
                  </div>
                );
              }}
            />
          </div>
        ) : null}
      </div>
    ); //return
  } //render
}

export default App;
