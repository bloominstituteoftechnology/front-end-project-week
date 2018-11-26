import React, { Component } from "react";
import axios from "axios";
import NoteList from "./Components/NoteList";
import Nav from "./Components/Nav";
import SingleNote from "./Components/SingleNote.js";
import NewNote from "./Components/NewNote";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: [],
      id: "all",
      title: "",
      textBody: ""
    };
  }

  clickHandler = id => {
    this.setState({
      id: id
    });
    if (id === "all") {
      setTimeout(() => {
        window.location.reload();
      }, 500);
    }
  };

  changeHandler = e => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  componentDidMount() {
    axios
      .get(`https://fe-notes.herokuapp.com/note/get/all`)
      .then(response => {
        this.setState({
          notes: response.data
        });
      })
      .catch(err => console.log(err));
  }

  createNote = e => {
    e.preventDefault();
    const note = {
      title: this.state.title,
      textBody: this.state.textBody
    };
    axios
      .post("https://fe-notes.herokuapp.com/note/create", note)
      .then(response => {
        this.setState({
          id: response.data.success
        });
      })
      .catch(err => console.log(err));
  };

  deleteNote = e => {
    e.preventDefault();
    console.log(this.state.id);
    axios
      .delete(`https://fe-notes.herokuapp.com/note/delete/${this.state.id}`)
      .then(() => {
        this.setState({
          id: "all"
        });
        setTimeout(() => {
          window.location.reload();
        }, 500);
      })
      .catch(err => console.log(err));
  };

  render() {
    if (this.state.id === "all") {
      return (
        <div className="App">
          <Nav clickHandler={this.clickHandler} />{" "}
          <NoteList notes={this.state.notes} clickHandler={this.clickHandler} />{" "}
        </div>
      );
    } else if (this.state.id === "new") {
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
            id={this.state.id}
            notes={this.state.notes}
            toggleModal={this.toggleModal}
            deleteNote={this.deleteNote}
            toggle={this.state.toggle}
          />{" "}
        </div>
      );
    }
  }
}

export default App;
