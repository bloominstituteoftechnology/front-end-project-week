import React, { Component } from "react";

import "./App.css";
import Nav from "./Nav/Nav.js";
import ListView from "./Components/ListView.js";
import CreateNote from "./Components/CreateNote.js";
import NoteView from "./Components/NoteView.js";
import EditView from "./Components/EditView.js";
import { Switch, Route } from "react-router-dom";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      title: "",
      content: ""
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:5000/notes")
      .then(response => {
        this.setState({ notes: response.data });
      })
      .catch(error => {
        console.error("error", error);
      });
  }
  inputChange = type => {
    return e => {
      this.setState({ [type]: e.target.value });
    };
  };

  buttonSubmitAdd = () => {
    const { title, content } = this.state;
    this.buttonSubmit({ title, content });
  };

  buttonSubmit = note => {
    axios
      .post("http://localhost:5000/notes", note)
      .then(response => {
        this.setState({ title: "", content: "", notes: response.data });
      });
  };
  handleEditSubmit = id => {
    axios
      .put(`http://localhost:5000/notes/${id}`, {
        title: this.state.title,
        content: this.state.content
      })
      .then(response => {
        this.setState({ title: "", content: "", notes: response.data });
      })

      .catch(error => console.log(error));
  };

  handleDelete = (event, id) => {
    event.preventDefault();
    let notesOriginal = this.state.notes;
    console.log(id);
    axios
      .delete(`http://localhost:5000/notes/${id}`)
      .then(response => {
        this.setState(() => ({
          notes: notesOriginal.filter(note => note.id !== id)
        }));
      })
      .catch(error => {
        console.error("error", error);
      });
  };

  render() {
    return (
      <div className="AppContainer">
        <Nav />
        <Switch>
          <Route
            exact
            path="/"
            render={() => <ListView notes={this.state.notes} />}
            //passing down to child components
            //this way makes stuff connected to everything
          />
          <Route
            exact
            path="/create"
            render={props => (
              <CreateNote
                {...props}
                //making the whole props available to CreateNote
                title={this.state.title}
                content={this.state.content}
                inputChange={this.inputChange}
                buttonSubmitAdd={this.buttonSubmitAdd}
              />
            )}
          />
          <Route
            path="/noteView/:id"
            render={props => (
              <NoteView
                {...props}
                title={this.state.title}
                content={this.state.content}
                handleDelete={this.handleDelete}
              />
            )}
          />
          <Route
            path="/editView/:id"
            render={props => (
              <EditView
                {...props}
                {...this.state}
                inputChange={this.inputChange}
                handleEditSubmit={this.handleEditSubmit}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
