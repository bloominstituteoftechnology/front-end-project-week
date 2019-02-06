import React, { Component } from "react";
import NoteList from "./Components/NoteList";
import Nav from "./Components/Nav";
import SingleNote from "./Components/SingleNote.js";
import NewNote from "./Components/NewNote";
import "./App.css";
import { connect } from "react-redux";
import {
  getNotes,
  selectNote,
  deleteNote,
  createNote
} from "./actions/actions.js";

class App extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      textBody: ""
    };
  }
  componentDidMount() {
    this.props.getNotes();
  }
  clickHandler = id => {
    this.props.selectNote(id);
    this.props.getNotes();
  };

  changeHandler = e => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  createNote = e => {
    e.preventDefault();
    const note = {
      title: this.state.title,
      textBody: this.state.textBody
    };
    this.props.createNote(note);
  };

  deleteNote = e => {
    e.preventDefault();
    this.props.deleteNote(this.props.id);
    this.props.getNotes();
  };

  render() {
    if (this.props.id === "all") {
      return (
        <div className="App">
          <Nav clickHandler={this.clickHandler} />{" "}
          <NoteList notes={this.props.notes} clickHandler={this.clickHandler} />{" "}
        </div>
      );
    } else if (this.props.id === "new") {
      return (
        <div className="App">
          <Nav clickHandler={this.clickHandler} />{" "}
          <NewNote
            changeHandler={this.changeHandler}
            createNote={this.createNote}
          />{" "}
        </div>
      );
    } else {
      return (
        <div className="App">
          <Nav clickHandler={this.clickHandler} />{" "}
          <SingleNote
            id={this.props.id}
            notes={this.props.notes}
            toggleModal={this.toggleModal}
            deleteNote={this.deleteNote}
            toggle={this.props.toggle}
          />{" "}
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    notes: state.notes,
    id: state.id,
    title: state.title,
    textBody: state.textBody,
    message: state.message,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { getNotes, selectNote, deleteNote, createNote }
)(App);
