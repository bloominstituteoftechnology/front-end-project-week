import React, { Component } from "react";
import { Route } from "react-router-dom";
import { NavLink } from "react-router-dom";
import AddNote from "./components/AddNote";
import NotesView from "./components/NotesView";
import "./App.css";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: [{
        id: 1,
        title: "Note Title",
        note: "Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phassellus diam metus, blandit ac purus a, efficitur mollis1"
      },
      {
        id: 2,
        title: "Note Title",
        note: "Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phassellus diam metus, blandit ac purus a, efficitur mollis2"
      },
      {
        id: 3,
        title: "Note Title",
        note: "Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phassellus diam metus, blandit ac purus a, efficitur mollis3"
      }],
      id: null,
      title: "",
      note: ""
    };
  }

  inputHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSaveHandler = e => {
    e.preventDefault();
    const notes = this.state.notes.slice();
    notes.push({
      id: this.state.id,
      title: this.state.title,
      note: this.state.note
    });
    console.log("notes copy", notes)
    console.log("App State", this.state)
    this.setState({notes: notes});
    console.log("App State after", this.state)
  };

  render() {
   
    return (
      
      <div className="app">
        <div className="navbar">
          <div className="navbar-title">Lambda Notes</div>
          <NavLink className="navlink" exact to="/">
            View Your Notes
          </NavLink>
          <NavLink className="navlink" to="/add-note">
            + Add a Note
          </NavLink>
        </div>
        <div className="notesbody">
        
        <Route
            exact
            path="/"
            render={props => 
              <NotesView 
                {...props} 
                notes={this.state.notes} />}
          />
      
          <Route
            path="/add-note"
            render={props => 
              <AddNote
                {...props}
                inputHandler={this.inputHandler}
                onSaveHandler={this.onSaveHandler}
              />
            }
          />
        </div>
      </div>
    );
  }
}
