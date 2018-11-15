import React, { Component } from "react";
import axios from "axios";
import NoteList from "./Components/NoteList";
import Nav from "./Components/Nav";
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

  clickHandler = key => {
    this.setState({
      id: key
    });
    console.log(this.state);
  };

  componentDidMount() {
    axios
      .get(`https://fe-notes.herokuapp.com/note/get/${this.state.id}`)
      .then(response => {
        this.setState({ notes: response.data });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <Nav />
        <NoteList notes={this.state.notes} clickHandler={this.clickHandler} />
      </div>
    );
  }
}

export default App;
