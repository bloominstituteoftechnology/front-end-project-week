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

      ],
      title: "",
      content: ""
    };
  }



  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleAddNote = e => {
    e.preventDefault();
    const notes = this.state.notes.slice();
    notes.push({ title: this.state.title, content: this.state.content, id:Date.now() });
    alert('Note added!')
    this.setState({ notes, title:'', content:'' });
    
  };

  // handleDeleteNote = e => {
  //   this.props.deleteNote(e.target.id);
  // }

  render() {
    return (
      <div className="App">
        <Nav />

        <Route
          exact
          path="/"
          render={() => <NotesList notes={this.state.notes} />}
        />

         <Route path="/notes/:id" render={props => <Note {...props} notes={this.state.notes} /> }
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
       
      </div>
    );
  }
}

export default App;
