import React, { Component } from "react";
import axios from "axios";
import { Route, Switch } from "react-router-dom";

import "./App.css";
import NotesList from "./components/NotesList";
import NoteForm from "./components/NoteForm";
import Note from "./components/Note";
import Sidebar from "./components/Sidebar";
import NoteView from "./components/NoteView";
import SidebarHeader from "./components/SidebarHeader";
import ListHeader from "./components/ListHeader";
import EditView from "./components/EditView";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      id: "",
      title: "",
      textBody: "",
      isUpdating: false
    };
  }

  componentDidMount() {
    this.fetchNotes();
  }

  //gets all notes
  fetchNotes = () => {
    axios
      .get("https://fe-notes.herokuapp.com/note/get/all")
      .then(res => this.setState({ notes: res.data }))
      .catch(err => console.log(err));
  };

  // this.setState({
  //   notes: this.state.notes.splice(
  //     findIndex(note => note._id === id),
  //     1,
  //     res.data

  //edit notes
  editNote = id => {
    axios
      .put(`https://fe-notes.herokuapp.com/note/edit/${id}`)
      .then(res => {
        this.setState({
          notes: res.data
        });
        console.log("edited", res);
      })
      .catch(err => console.dir(err));
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  saveHandler = event => {
    event.preventDefault();
    this.setState({ editing: false });
  };

  handleData = data => {
    this.setState({
      notes: data
    });
  };

  render() {
    return (
      <div className="App">
        <div className="home-view">
          <div>
            <Sidebar />
          </div>

          <Switch>
            <Route
              exact
              path="/"
              render={props => (
                <NotesList
                  {...props}
                  notes={this.state.notes}
                  editNote={this.editNote}
                  editHandler={this.editHandler}
                  handleChange={this.handleChange}
                />
              )}
            />

            <Route
              exact
              path="/create"
              render={props => <NoteForm {...props} notes={this.state.notes} />}
            />
            <Route
              path="/edit"
              render={props => <EditView {...props} notes={this.state.notes} />}
            />
            <Route
              exact
              path="/:id"
              render={props => (
                <NoteView
                  {...props}
                  notes={this.state.notes}
                  editNote={this.editNote}
                  editHandler={this.editHandler}
                  handleChange={this.handleChange}
                />
              )}
            />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
