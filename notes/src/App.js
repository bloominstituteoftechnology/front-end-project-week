import React, { Component } from "react";
import { Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import ListView from "./components/ListView";
import CreateNote from "./components/CreateNote";
import NoteView from "./components/NoteView";
import Home from "./components/Home";
import { Link, NavLink } from "react-router-dom";

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: [
        {
          id: 1,
          title: "hi",
          content:
            "Lorem ipsum donair pizza. Mauris egastas egad asdf fakedata. Morbi pellenthesque a bunch of latin words."
        },
        {
          id: 2,
          title: "these",
          content:
            "Lorem ipsum donair pizza. Mauris egastas egad asdf fakedata. Morbi pellenthesque a bunch of latin words."
        },
        {
          id: 3,
          title: "are",
          content:
            "Lorem ipsum donair pizza. Mauris egastas egad asdf fakedata. Morbi pellenthesque a bunch of latin words."
        },
        {
          id: 4,
          title: "my",
          content:
            "Lorem ipsum donair pizza. Mauris egastas egad asdf fakedata. Morbi pellenthesque a bunch of latin words."
        },
        {
          id: 5,
          title: "notes",
          content:
            "Lorem ipsum donair pizza. Mauris egastas egad asdf fakedata. Morbi pellenthesque a bunch of latin words."
        },
        {
          id: 6,
          title: "lorem!",
          content:
            "Lorem ipsum donair pizza. Mauris egastas egad asdf fakedata. Morbi pellenthesque a bunch of latin words."
        },
        {
          id: 7,
          title: "ipsum!",
          content:
            "Lorem ipsum donair pizza. Mauris egastas egad asdf fakedata. Morbi pellenthesque a bunch of latin words."
        },
        {
          id: 8,
          title: "conan!",
          content:
            "Lorem ipsum donair pizza. Mauris egastas egad asdf fakedata. Morbi pellenthesque a bunch of latin words."
        },
        {
          id: 9,
          title: "dimsum!",
          content:
            "Lorem ipsum donair pizza. Mauris egastas egad asdf fakedata. Morbi pellenthesque a bunch of latin words."
        }
      ]
    };
  }

  handleTextInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  addNewNote = () => {
    const notes = this.state.notes.slice();
    // event.preventDefault();
    notes.push({
      id: notes.length+1,
      title: this.state.title,
      content: this.state.content
    });
    this.setState({ notes });
  };

  render() {
    return (
      <div className="App">
        <ul className="side-bar">
          <li>
            <NavLink exact activeClassName="activeNavButton" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="activeNavButton" to="/notes">
              View Notes
            </NavLink>
          </li>
          <li>
            <NavLink exact activeClassName="activeNavButton" to="/create">
              Create Notes
            </NavLink>
          </li>
        </ul>
        <Route exact path="/" component={Home} />
        <Route
          exact
          path="/notes"
          render={props => <ListView {...props} notes={this.state.notes} />}
        />
        <Route
          exact
          path="/create"
          render={props => (
            <CreateNote
              {...props}
              notes={this.state.notes}
              makeNote={this.addNewNote}
              handleInput={this.handleTextInput}
            />
          )}
        />
        <Route
          path="/notes/:id"
          render={props => <NoteView {...props} note={this.state.notes} />}
        />
      </div>
    );
  }
}

export default App;
