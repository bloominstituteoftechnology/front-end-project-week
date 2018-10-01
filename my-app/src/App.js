import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import Form from "./components/Form/form";

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: [],
      note: {}
    };
  }

  componentDidMount() {
    // fetch data from the api
    axios
      .get("https://killer-notes.herokuapp.com/note/get/all")
      .then(response => {
        console.log(response);
        // set our state with the new data
        this.setState({ notes: response.data });
      })
      .catch(err => console.log(err));
  }

  //with new input state of title and textbody are changed.
  handleInputChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">My Notecard App, you got this Ray!</h1>
        </header>
        <Form />
        {this.state.notes.map(note => (
          // <img src={note} key={note} />
          <li>{note.tags}</li>
        ))}
      </div>
    );
  }
}

export default App;
