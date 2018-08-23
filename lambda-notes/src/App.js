import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AllNotes from "./components/notes/AllNotes";
import NewNote from "./components/notes/NewNote";
import EditNote from "./components/notes/EditNote";
import SingleNote from "./components/notes/SingleNote";
import { noteData } from "./components/data/noteData";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      loadedData: false,
      title: "",
      description: "",
      isOpen: false
    };
    // this.deleteNoteHandler = this.deleteNoteHandler.bind(this);
  }
  componentDidMount() {
    this.setState({ notes: noteData, loadedData: true });
  }

  // not receiving any props
  // componentDidUpdate(prevProps) {
  //   console.log("PREVPROPS APP", prevProps);
  //   console.log("CURRENTPROPS APP", this.props);
  //   if (this.props !== prevProps.notes) {
  //     console.log("NOT MATCHING");
  //   }
  // }

  // new note and modify note handlers
  inputChangeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  submitNewNoteHandler = event => {
    event.preventDefault();
    let notesCopy = this.state.notes.slice();
    let lastIndex = this.state.notes.slice(-1)[0];
    lastIndex = lastIndex.id + 1;
    let newNote = {
      id: lastIndex,
      title: this.state.title,
      description: this.state.description
    };
    notesCopy.push(newNote);
    this.setState({ notes: notesCopy, title: "", description: "" });
  };

  editNewNoteHandler = event => {
    event.preventDefault();
    let noteNumberToEdit = parseInt(
      event.target.attributes.getNamedItem("notenumber").value,
      10
    );
    let notesCopy = this.state.notes.slice();
    notesCopy[noteNumberToEdit].title = this.state.title;
    notesCopy[noteNumberToEdit].description = this.state.description;
    this.setState({ notes: notesCopy, title: "", description: "" });
  };
  // end new note and modify note handlers

  // delete note handlers and modal
  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  deleteNoteHandler = event => {
    console.log("event", event);
    let noteNumberToAvoid = parseInt(
      event.target.attributes.getNamedItem("deletenotenumber").value,
      10
    );
    let notesCopy = this.state.notes.slice();
    console.log("DELETE NOTE HANDLER", noteNumberToAvoid);
    console.log("DELETE NOTE HANDLER", notesCopy);
    notesCopy = notesCopy.filter(note => {
      console.log(note);
      return note.id !== noteNumberToAvoid;
    });
    console.log("DELETE NOTE HANDLER", notesCopy);
    this.setState({ notes: notesCopy });

    // Same as above, just uses different way
    // console.log("DELETE NOTE HANDLER", event);
    // this.setState({
    //   notes: this.state.notes.filter(note => note.id !== event)
    // });
  };

  render() {
    console.log("isOpen", this.state.isOpen);
    if (this.state.loadedData === false) {
      return (
        <div>
          <p>Loading please wait</p>
        </div>
      );
    }
    return (
      <Router>
        <div className="App">
          <Route
            exact
            path="/"
            render={props => <AllNotes {...props} notes={this.state.notes} />}
          />
          <Route
            path="/new-note"
            render={props => (
              <NewNote
                {...props}
                inputChangeHandler={this.inputChangeHandler}
                submitNewNoteHandler={this.submitNewNoteHandler}
              />
            )}
          />
          <Route
            path="/notes/:id"
            render={props => (
              <SingleNote
                {...props}
                notes={this.state.notes}
                toggleModal={this.toggleModal}
                show={this.state.isOpen}
                deleteNoteHandler={this.deleteNoteHandler}
              />
            )}
          />
          <Route
            path="/edit-note/:id"
            render={props => (
              <EditNote
                {...props}
                notes={this.state.notes}
                inputChangeHandler={this.inputChangeHandler}
                editNewNoteHandler={this.editNewNoteHandler}
              />
            )}
          />
        </div>
      </Router>
    );
  }
}

export default App;
