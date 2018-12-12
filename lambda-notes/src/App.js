import React, { Component } from "react";
import { Route, NavLink } from "react-router-dom";
import "./App.css";
import axios from "axios";

import ListOfNotes from "./components/ListofNotes";
import AddNote from "./components/AddNote";
import NoteCard from "./components/NoteCard";
import EditNote from "./components/EditNote";

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: [],
      title: "",
      textBody: "",
      singleNote: []
    };
  }

  componentDidMount() {
    axios
      .get("https://fe-notes.herokuapp.com/note/get/all")
      .then(response => {
        this.setState({
          notes: response.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  componentDidUpdate(prevState) {
    if (this.state.notes !== prevState.notes) {
      axios
        .get("https://fe-notes.herokuapp.com/note/get/all")
        .then(response => {
          this.setState({
            notes: response.data
          })
        })
        .catch(err => {
          console.log(err);
        })
    }
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  addNote = data => {
    axios
      .post("https://fe-notes.herokuapp.com/note/create", data)
      .then(response => {
        this.setState({
          title: "",
          textBody: ""
        });
        // window.location.reload();
      })
      .catch(err => console.log(err));
  };

  fetchNote = id => {
    axios
      .get(`https://fe-notes.herokuapp.com/note/get/${id}`)
      .then(response => {
        this.setState({ singleNote: response.data });
      })
      .catch(err => {
        console.error(err);
      });
  };

  editNote = (id, data) => {
    axios
      .put(`https://fe-notes.herokuapp.com/note/edit/${id}`, data)
      .then(response => {
        this.setState({ note: response.data, title: "", textBody: "" });
        // window.location.reload();
      })
      .catch(err => console.log(err));
  };

  deleteNote = id => {
    axios
      .delete(`https://fe-notes.herokuapp.com/note/delete/${id}`)
      .then(response => {
        this.setState({ note: response.data });
        // window.location.reload();
      })
      .catch(err => console.log(err));
  };

  toggleModal = () => {
    let modal = document.getElementById("modal");
    modal.classList.toggle("modal");
  };

  deleteHandler = event => {
    event.preventDefault();
    this.deleteNote(this.state.singleNote._id);
    this.props.history.push("/");
    this.toggleModal();
  };

  render() {
    return (
      <div className="App">
        <div id="modal" className="hidden">
          <div className="confirmation-modal">
            <p>Are you sure you want to delete this?</p>
            <div className="delete-button" onClick={this.deleteHandler}>
              Delete
            </div>
            <div onClick={this.toggleModal}>No</div>
          </div>
        </div>
        <section className="nav-section">
          <h1>Lambda Notes</h1>
          <NavLink exact to={"/"}>
            View Your Notes
          </NavLink>
          <NavLink to={"/add-note"}>+ Create New Note</NavLink>
        </section>
        <section className="content-container">
          <Route
            exact
            path="/"
            render={props => (
              <ListOfNotes
                {...props}
                state={this.state}
                fetchNote={this.fetchNote}
              />
            )}
          />
          <Route
            path="/add-note"
            render={props => (
              <AddNote
                {...props}
                addNote={this.addNote}
                state={this.state}
                handleChange={this.handleChange}
              />
            )}
          />
          <Route
            exact
            path={`/note/:id`}
            render={props => (
              <NoteCard
                {...props}
                notes={this.state.notes}
                singleNote={this.state.singleNote}
                toggleModal={this.toggleModal}
              />
            )}
          />
          <Route
            exact
            path={"/edit-note/:id"}
            render={props => (
              <EditNote
                {...props}
                state={this.state}
                singleNote={this.state.singleNote}
                editNote={this.editNote}
                handleChange={this.handleChange}
              />
            )}
          />
        </section>
      </div>
    );
  }
}

export default App;
