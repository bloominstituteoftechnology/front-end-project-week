import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import ListView from "./components/ListView";
import CreateNote from "./components/CreateNote";
import NoteView from "./components/NoteView";
import Home from "./components/Home";
import EditView from "./components/EditView";
import axios from "axios";

const url = "http://localhost:8000/api/notes";

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: [],
      id: "",
      title: "",
      content: ""
    };
  }

  componentDidMount() {
    axios.get(url).then(response => {
      console.log(response);
      this.setState({
        notes: response.data
      });
    });
  }

  handleTextInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  // addNewNote = () => {
  //   const notes = this.state.notes.slice();
  //   // event.preventDefault();
  //   notes.push({
  //     id: notes.length + 1,
  //     title: this.state.title,
  //     content: this.state.content
  //   });
  //   this.setState({ notes });
  // };
  addNewNote = () => {
    axios
      .post(url, { title: this.state.title, content: this.state.content })
      .then(response => {
        axios.get(url).then(response => {
          this.setState({ notes: response.data });
        });
        this.setState({ notes: response.data });
      });
  };

  // editNote = id => {
  //   const editedNote = {
  //     id: parseInt(id),
  //     title: this.state.title,
  //     content: this.state.content
  //   };
  //   //THIS TURNS INTO A STRING
  //   //interpolated string
  //   const notesIndex = this.state.notes.findIndex(note => `${note.id}` === id);
  //   //takes in empty array first
  //   //2nd takes in what you want to mutate
  //   //3rd is the index of array and new value of array
  //   //that you want to mutate
  //   const newNotes = Object.assign([], this.state.notes, {
  //     [notesIndex]: editedNote
  //   });
  //   this.setState({ notes: newNotes });
  // };
  editNote = (id, title, content) => {
    axios
      .put(url / id, {
        title: title,
        content: content
      })
      .then(response => {
        axios.get(url).then(response => {
          this.setState({ notes: response.data });
        });
      });
  };

  // deleteNote = id => {
  //   this.setState(prevState => ({
  //     notes: prevState.notes.filter(note => {
  //       console.log("id", id === note.id);
  //       // console.log('noteId', note.id);
  //       return note.id != id;
  //     })
  //   }));
  // };
  deleteNote = id => {
    axios.delete(url/id).then(response => {
      axios.get(url).then(response => {
        this.setState({ notes: response.data });
      });
    });
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
