import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import ListView from "./components/ListView";
import CreateNote from "./components/CreateNote";
import NoteView from "./components/NoteView";
import Home from "./components/Home";
import EditView from "./components/EditView";

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
      id: notes.length + 1,
      title: this.state.title,
      content: this.state.content
    });
    this.setState({ notes });
  };

  // editNote = () => {
  //   const notes = this.state.notes.slice();
  //   notes.map({
  //     id: notes.length + 1,
  //     title: this.state.title,
  //     content: this.state.content
  //   });
  //   this.setState({ notes });
  // };

  editNote = id => {
    const editedNote = {
      id: id,
      title: this.state.title,
      content: this.state.content
    };
                                                       //THIS TURNS INTO A STRING
                                                       //interpolated string
    const notesIndex = this.state.notes.findIndex(note => `${note.id}` === id); 
           //takes in empty array first
           //2ns takes in what you want to mutate
           //3rd is the index of array and new value of array
           //that you want to mutate
   const newNotes = Object.assign([], this.state.notes, {[notesIndex]: editedNote});
    console.log("edited", newNotes);
    this.setState({ notes: newNotes });
  };

  deleteNote = () => {
    const notes = [...this.state.notes];
    notes.splice(this.state.id, 1);
    this.setState({ notes });
  };

  render() {
    return (
      <div className="App">
        <div className="side-bar">
          
            <Link
              exact
              ClassName="NavButton1"
              to="/"
              style={{ textDecoration: "none" }}
            >
              Home
            </Link>
        
            <Link
              ClassName="NavButton2"
              to="/notes"
              style={{ textDecoration: "none" }}
            >
              View Notes
            </Link>
    
            <Link
              exact
              ClassName="NavButton3"
              to="/create"
              style={{ textDecoration: "none" }}
            >
              Create a Note
            </Link>
         
        </div>
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
          render={props => (
            <NoteView
              {...props}
              note={this.state.notes}
              deleteNote={this.deleteNote}
            />
          )}
        />
        <Route
          path="/edit/:id"
          render={props => (
            <EditView
              {...props}
              editNote={this.editNote}
              handleEditInput={this.handleTextInput}
            />
          )}
        />
      </div>
    );
  }
}

export default App;
