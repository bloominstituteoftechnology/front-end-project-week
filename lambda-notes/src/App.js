import React, { Component } from "react";
import { Route } from "react-router-dom";
import axios from "axios";
import Home from "./components/Home/Home";
import CreateNote from "./components/CreateNote/CreateNote";
import Note from "./components/Note/Note";
import EditNote from "./components/EditNote/EditNote";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: [],
    }
  }

  componentDidMount() {
    axios.get(`http://localhost:5000/api/notes`)
      .then(response => this.setState({ notes: response.data }))
      .catch(error => console.log(error))
  }

  addNote = (note) => {
    axios.post(`http://localhost:5000/api/notes`, note)
      .then(response => this.setState({ notes: response.data }))
      .catch(error => console.log(error))
  }

  deleteNote = (id) => {
    axios.delete(`http://localhost:5000/api/notes/${id}`)
      .then(response => this.setState({ notes: response.data }))
      .catch(error => console.log(error))
  }

  changeNote = (id, obj) => {
    axios.put(`http://localhost:5000/api/notes/${id}`, obj)
      .then(response => this.setState({ notes: response.data }))
      .catch(error => console.log(error))
  }

  render() {
    return (
      <div className="App">
        <Route exact path="/" render={(props) => { return (<Home {...props} notes={this.state.notes} />) }} />
        <Route exact path="/CreateNote" render={(props) => { return (<CreateNote {...props} addNote={this.addNote} notes={this.state.notes} />) }} />
        <Route exact path="/notes/:id" render={(props) => { return (<Note {...props} deleteNote={this.deleteNote} />) }} />
        <Route exact path="/EditNote/:id" render={(props) => { return (<EditNote {...props} changeNote={this.changeNote} />) }} />
      </div>
    )
  }
}

export default App;
