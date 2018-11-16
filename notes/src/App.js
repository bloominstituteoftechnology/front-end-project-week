import React, { Component } from "react";
import axios from "axios";
import NoteList from "./Components/NoteList";
import Nav from "./Components/Nav";
import SingleNote from "./Components/SingleNote.js";
import { Route } from "react-router-dom";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: [],
      id: "all"
    };
  }

  noteClickHandler = id => {
    this.setState({
      id: id
    });
    console.log(this.state.id);
  };

  viewAllClickHandler = () => {
    this.setState({
      id: "all"
    });
  };
  componentDidMount() {
    axios
      .get(`https://fe-notes.herokuapp.com/note/get/all`)
      .then(response => {
        this.setState({ notes: response.data });
      })
      .catch(err => console.log(err));
  }

  render() {
    if (this.state.id !== "all") {
      return (
        <div className="App">
          <Nav viewAllClickHandler={this.viewAllClickHandler} />
          <SingleNote id={this.state.id} notes={this.state.notes} />
        </div>
      );
    } else {
      return (
        <div className="App">
          <Nav viewAllClickHandler={this.viewAllClickHandler} />
          <NoteList
            notes={this.state.notes}
            noteClickHandler={this.noteClickHandler}
          />
        </div>
      );
    }
  }
}

export default App;
