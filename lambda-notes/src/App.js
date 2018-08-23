import React, { Component } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import AllNotes from "./components/notes/AllNotes";
import NewNote from "./components/notes/NewNote";
import EditNote from "./components/notes/EditNote";
import SingleNote from "./components/notes/SingleNote";
import { noteData } from "./components/data/noteData";
import { SideBar } from "./components/sidebar/SideBar";
import "./App.css";
import "./css/reset.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      loadedData: false,
      title: "",
      description: "",
      isOpen: false,
      // modal actions start
      loadingModal: false,
      successModal: false,
      // redirect
      redirect: false
    };
    // this.deleteNoteHandler = this.deleteNoteHandler.bind(this);
  }
  componentDidMount() {
    this.setState({ notes: noteData, loadedData: true });
  }

  // new note and modify note handlers
  inputChangeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  submitNewNoteHandler = event => {
    event.preventDefault();
    let notesCopy = this.state.notes.slice();
    let lastIndex = 0;
    if (notesCopy.length <= 0) {
      lastIndex = 0;
    } else {
      lastIndex = this.state.notes.slice(-1)[0];
      lastIndex = lastIndex.id + 1;
    }
    let newNote = {
      id: lastIndex,
      title: this.state.title,
      description: this.state.description
    };
    notesCopy.push(newNote);
    this.setState({ notes: notesCopy, title: "", description: "" });
    setTimeout(() => this.setState({ redirect: true }), 1000);
    setTimeout(() => this.setState({ redirect: false }), 1000);
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
    setTimeout(() => this.setState({ redirect: true }), 1000);
    setTimeout(() => this.setState({ redirect: false }), 1000);
  };
  // end new note and modify note handlers

  // delete note handlers and modal
  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  deleteNoteHandler = event => {
    let noteNumberToAvoid = parseInt(
      event.target.attributes.getNamedItem("deletenotenumber").value,
      10
    );
    let notesCopy = this.state.notes.slice();
    notesCopy = notesCopy.filter(note => {
      return note.id !== noteNumberToAvoid;
    });
    this.setState({ notes: notesCopy });

    setTimeout(() => this.setState({ redirect: true }), 1000);
    setTimeout(() => this.setState({ redirect: false, isOpen: false }), 1000);
  };

  // redirect
  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }
  };

  render() {
    if (this.state.loadedData === false) {
      return (
        <div>
          <p>Loading please wait</p>
        </div>
      );
    }
    return (
      <Router>
        <div className="mainAppDiv">
          <Route path="/" component={SideBar} />
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
                renderRedirect={this.renderRedirect}
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
                renderRedirect={this.renderRedirect}
                loadingModal={this.state.loadingModal}
                successModal={this.state.successModal}
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
                renderRedirect={this.renderRedirect}
              />
            )}
          />
        </div>
      </Router>
    );
  }
}

export default App;
