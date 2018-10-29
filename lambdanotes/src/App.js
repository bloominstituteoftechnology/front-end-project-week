import React, { Component } from "react";
import { Route } from "react-router-dom";
import axios from "axios";
import SideBar from "./components/SideBar";
import ViewNotes from "./components/ViewNotes";
import ExpandedNote from "./components/ExpandedNote";
import CreateNote from "./components/CreateNote";
import EditNote from "./components/EditNote";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      content: "",
      notes: [],
      selected: 0
    };
  }

  componentDidMount() {
    this.updateNotes();
  }

  updateNotes = () => {
    setTimeout(() => {
      axios
        .get("https://fe-notes.herokuapp.com/note/get/all")
        .then(res => {
          this.setState({
            notes: res.data
          });
        })
        .catch(err => {
          console.log(err);
        });
    }, 1000);
  };

  selectNote = id => {
    this.setState({ selected: id });
    console.log(this.state.selected);
  };

  changeHandler = ev => {
    this.setState({
      [ev.target.name]: ev.target.value
    });
  };

  saveNote = ev => {
    ev.preventDefault();
    if (this.state.text === "" || this.state.content === "") {
      alert("Please fill in all of the required fields");
    } else {
      axios
        .post("https://fe-notes.herokuapp.com/note/create", {
          tags: [],
          title: this.state.title,
          textBody: this.state.content
        })
        .then(this.updateNotes());
    }
  };

  saveEdit = (ev, id) => {
    ev.preventDefault();
    console.log("edititing note", id);
    if (this.state.title === "" || this.state.content === "") {
      alert("Please fill in all of the required fields");
    } else {
      this.setState({
        title: "",
        content: ""
      });
      axios
        .put(`https://fe-notes.herokuapp.com/note/edit/${id}`, {
          tags: [],
          title: this.state.title,
          textBody: this.state.content
        })
        .then(res => console.log(res))
        .then(this.updateNotes());
      alert("Note saved!");
    }
  };

  deleteNote = (ev, id) => {
    ev.preventDefault();
    console.log(id);
    axios
      .delete(`https://fe-notes.herokuapp.com/note/delete/${id}`)
      .then(this.updateNotes());
  };

  render() {
    return (
      <div className="App">
        <div className="container">
          <SideBar />

          <Route
            exact
            path="/"
            render={props => (
              <ViewNotes
                {...props}
                notes={this.state.notes}
                selectNote={this.selectNote}
              />
            )}
          />
          <Route
            exact
            path="/:id(\d+)"
            render={props => (
              <ExpandedNote
                {...props}
                note={this.state.notes[this.state.selected]}
                deleteNote={this.deleteNote}
                id={this.state.notes[this.state.selected]._id}
              />
            )}
          />
          <Route
            exact
            path="/create"
            render={props => (
              <CreateNote
                {...props}
                changeHandler={this.changeHandler}
                title={this.state.title}
                content={this.state.content}
                saveNote={this.saveNote}
              />
            )}
          />
          <Route
            exact
            path="/:id/edit"
            render={props => (
              <EditNote
                {...props}
                note={this.state.notes[this.state.selected]}
                changeHandler={this.changeHandler}
                title={this.state.title}
                content={this.state.content}
                saveEdit={this.saveEdit}
              />
            )}
          />
        </div>
      </div>
    );
  }
}

export default App;
