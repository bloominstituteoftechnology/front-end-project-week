import React, { Component } from "react";
import { Route } from "react-router-dom";
import axios from 'axios';

import SideBar from "./components/Sidebar";
import Notes from "./components/Notes";
import CreateNote from "./components/CreateNote";
import NotePage from "./components/NotePage";
import EditNote from "./components/EditNote";

import './styles/App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: [],
      newNote: {
        tags: [],
        title: "",
        textBody: ""
      }
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
      .catch(error => {
        console.log(error);
      });
  }

  inputChange = e => {
    e.preventDefault();
    this.setState({
      newNote: {
        ...this.state.newNote,
        [e.target.name]: e.target.value
      }
    });
  };

  addNote = e => {
    e.preventDefault();
    axios
      .post("https://fe-notes.herokuapp.com/note/create", this.state.newNote)
      .then(response =>
        this.setState({
          notes: response.data,
          newNote: { title: "", textBody: "" }
        })
      )
      .catch(error => console.log(error));
  };

  updateNote = id => {
    axios
      .put(`https://fe-notes.herokuapp.com/note/edit/${id}`, this.state.newNote)
      .then(response => this.setState({ notes: response.data }))
      .catch(error => console.log(error));
  };

  deleteNote = id => {
    axios
      .delete(`https://fe-notes.herokuapp.com/note/delete/${id}`)
      .then(response => this.setState({ notes: response.data }))
      .catch(error => console.log(error));
  };

  render() {
    return (
      <div className="App">
        <SideBar />
        <Route
          exact
          path="/"
          render={props => <Notes {...props} notes={this.state.notes} />}
        />
        <Route
          exact
          path="/create"
          render={props => (
            <CreateNote
              {...props}
              notes={this.state.notes}
              inputChange={this.inputChange}
              addNote={this.addNote}
              newNote={this.state.newNote}
            />
          )}
        />
        <Route
          exact
          path="/note/:id"
          render={props => (
            <NotePage
              {...props}
              notes={this.state.notes}
              deleteNote={this.deleteNote}
            />
          )}
        />
        <Route
          exact
          path="/note/:id/edit"
          render={props => (
            <EditNote
              {...props}
              notes={this.state.notes}
              inputChange={this.inputChange}
              newNote={this.state.newNote}
              editNote={this.updateNote}
            />
          )}
        />
      </div>
    );
  }
}

export default App;
