import React, { Component } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import axios from "axios";
import AllNotes from "./components/notes/AllNotes";
import NewNote from "./components/notes/NewNote";
import EditNote from "./components/notes/EditNote";
import SingleNote from "./components/notes/SingleNote";
import { SideBar } from "./components/sidebar/SideBar";
import "./App.css";
import "./css/reset.css";

const dataURL = "http://localhost:7000/api/notes/";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      loadedData: false,
      title: "",
      content: "",
      isOpen: false,
      // modal actions start
      loadingModal: false,
      successModal: false,
      // redirect
      redirect: false,
    };
  }
  componentDidMount() {
    axios
      .get(dataURL)
      .then(response => {
        this.setState({ notes: response.data, loadedData: true });
      })
      .catch(err => {
        console.log(err);
      });
  }

  // new note and modify note handlers
  inputChangeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  submitNewNoteHandler = event => {
    // event.preventDefault();
    const newNote = {
      title: this.state.title,
      content: this.state.content,
    };
    axios
      .post(dataURL, newNote)
      .then(response => {
        this.setState({ title: "", content: "" });
        // setTimeout(() => this.setState({ redirect: true }), 1000);
        // this.forceUpdate();
      })
      .catch(err => {
        console.log(err);
      });
  };

  editNewNoteHandler = event => {
    event.preventDefault();
    let noteNumberToEdit = parseInt(
      event.target.attributes.getNamedItem("notenumber").value,
      10,
    );
    let notesCopy = this.state.notes.slice();
    notesCopy[noteNumberToEdit].title = this.state.title;
    notesCopy[noteNumberToEdit].content = this.state.content;
    this.setState({ notes: notesCopy, title: "", content: "" });
    setTimeout(() => this.setState({ redirect: true }), 1000);
    setTimeout(() => this.setState({ redirect: false }), 1000);
  };
  // end new note and modify note handlers

  // delete note handlers and modal
  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  deleteNoteHandler = event => {
    let noteNumberToAvoid = parseInt(
      event.target.attributes.getNamedItem("deletenotenumber").value,
      10,
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
      this.setState({ redirect: false });
      return <Redirect to="/" />;
    } else {
      // do nothing
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
            render={props => (
              <AllNotes
                {...props}
                notes={this.state.notes}
                renderRedirect={this.renderRedirect}
              />
            )}
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
