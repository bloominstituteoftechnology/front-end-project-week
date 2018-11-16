import React, { Component } from "react";
import "./App.css";
import Sidebar from "./containers/Note/Sidebar";
import { Route } from "react-router-dom";
import NoteList from "./containers/Note/NoteList";
// import notes from "./data";
import NotePage from "./containers/Note/NotePage";
import NoteForm from "./containers/Note/NoteForm";
import axios from "axios";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      title: "",
      textBody: "",
      delete: false
    };
  }
  componentDidMount() {
    // this.setState({ notes: notes });
      axios
        .get("https://fe-notes.herokuapp.com/note/get/all")
        .then(res => this.setState({notes: res.data}))
        .catch(err => console.log(err));

  }
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }
  addNote = e => {
    e.preventDefault();
    const newNote = {
      title: this.state.title,
      textBody: this.state.textBody
    }

    axios
      .post("https://fe-notes.herokuapp.com/note/create", newNote)
      .then(res => this.setState({ notes: res.data}))
      .catch(err => console.log(err))

  }
  deleteNoteOn = () => {
    this.setState({ delete: true });
  };
  deleteNoteOff = e => {
    e.preventDefault()
    this.setState({ delete: false });
  };
  render() {
    return (
      <div className="App">
        <Sidebar />
        <Route
          exact
          path="/"
          render={props => <NoteList {...props} notes={this.state.notes} />}
        />
        <Route
          path="/note/:id"
          render={props => <NotePage {...props} notes={this.state.notes} deleteNoteOn={this.deleteNoteOn} deleteNoteOff={this.deleteNoteOff} delete={this.state.delete} />}
        />
        <Route
          path="/create"
          render={props => <NoteForm {...props} notes={this.state.notes} addNote={this.addNote} handleChange={this.handleChange}/>}
        />
      </div>
    );
  }
}

export default App;
