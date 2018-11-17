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
      id: "all"
    };
  }

  clickHandler = id => {
    this.setState({
      id: id
    });
    console.log(this.state.id);
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
    if (this.state.id === "all") {
      return (
        <div className="App">
          <Nav clickHandler={this.clickHandler} />
          <NoteList notes={this.state.notes} clickHandler={this.clickHandler} />
        </div>
      );
    } else if (this.state.id === "new") {
      return (
        <div className="App">
          <Nav clickHandler={this.clickHandler} />
          <NewNote />
        </div>
      );
    } else {
      return (
        <div className="App">
          <Nav clickHandler={this.clickHandler} />
          <SingleNote id={this.state.id} notes={this.state.notes} />
        </div>
      );
    }
  }
}

export default App;
