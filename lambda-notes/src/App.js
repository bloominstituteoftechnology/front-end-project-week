import React, { Component } from "react";
import { Route } from "react-router-dom";
import "./App.css";

import NotesList from "./components/NotesList";
import NoteForm from "./components/NoteForm";
import Note from "./components/Note";
import Nav from "./components/Nav";

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: [
        {
          title: "Note 1",
          id: 0,
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam facilisis posuere pellentesque. Nunc bibendum pharetra sem, et laoreet turpis finibus ut. "
        },
        {
          title: "Note 2",
          id: 1,
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam facilisis posuere pellentesque. Nunc bibendum pharetra sem, et laoreet turpis finibus ut. "
        },
        {
          title: "Note 3",
          id: 2,
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam facilisis posuere pellentesque. Nunc bibendum pharetra sem, et laoreet turpis finibus ut. "
        },
        {
          title: "Note 4",
          id: 3,
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam facilisis posuere pellentesque. Nunc bibendum pharetra sem, et laoreet turpis finibus ut. "
        }
      ],
      title: "",
      content: ""
    };
  }

  componentDidMount() {
    this.setState({ notes: this.state.notes });
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleAddNote = e => {
    e.preventDefault();
    const notes = this.state.notes.slice();
    notes.push({ title: this.state.title, content: this.state.content });
    alert('Note added!')
    this.setState({ notes, title:'', content:'' });
    
  };

  render() {
    return (
      <div className="App">
        <Nav />
        <Route
          exact
          path="/"
          render={props => <NotesList {...props} notes={this.state.notes} />}
        />
        <Route
          path="/form"
          render={props => (
            <NoteForm
              {...props}
              title={this.state.title}
              content={this.state.content}
              handleAddNote={this.handleAddNote}
              handleInputChange={this.handleInputChange}
            />
          )}
        />
        <Route path="/notes/:id" component={Note} />
      </div>
    );
  }
}

export default App;
