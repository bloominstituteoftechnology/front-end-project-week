import React, { Component } from "react";
import NavBar from "./components/navbar/";
import Notes from "./components/notes/notesPage.js";
import NewNote from "./components/notes/newNote.js";
import SingleNotePage from "./components/notes/singleNotePage.js";
import LogIn from "./components/authenticate/logIn.js";
import SignUp from "./components/authenticate/signUp.js";
import { Route } from "react-router-dom";
import EditNoteForm from "./components/notes/editNoteForm.js";
import { withRouter } from "react-router-dom";
import "./App.css";

class App extends Component {
  componentDidMount() {
    const jwt = localStorage.getItem("jwt");
    if (jwt === null && localStorage.getItem("location") !== "/signup") {
      this.props.history.push("/login");
      localStorage.setItem("location", "/login");
    } else {
      this.props.history.push(localStorage.getItem("location"));
    }
  }

  render() {
    if (localStorage.getItem("jwt") !== null) {
      return (
        <div className="App">
          <NavBar />
          <Route exact path="/notes" component={Notes} />
          <Route exact path="/create" component={NewNote} />
          <Route exact path="/notes/:noteId" component={SingleNotePage} />
          <Route exact path="/notes/:noteId/edit" component={EditNoteForm} />
        </div>
      );
    } else {
      return (
        <div className="Registration">
          <NavBar />
          <Route exact path="/login" component={LogIn} />
          <Route exact path="/signup" component={SignUp} />
        </div>
      );
    }
  }
}

export default withRouter(App);
