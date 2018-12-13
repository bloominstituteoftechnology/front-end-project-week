import React, { Component } from "react";
import { Route, withRouter } from "react-router-dom";
import axios from "axios";
import Login from "./components/Login";
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
      searchText: "",
      notes: [
        {
          title: "hello",
          description: "weird test"
        }
      ],
      selected: 0,
      loggedIn: false
    };
  }

  componentDidMount() {
    this.updateNotes();
    this.renderScreen(); 
  }

  renderScreen = () => {
    this.state.loggedIn ? this.history.push("/notes") : this.updateNotes();
  }

  //axios get request, 1 second delay
  updateNotes = () => {
    setTimeout(() => {
      axios
        .get("http://localhost:9000/api/notes")
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

  //selected becomes the index in the array of notes that is clicked on
  selectNote = id => {
    this.setState({ selected: id });
    console.log(this.state.selected);
  };

  //handles all input forms
  changeHandler = ev => {
    this.setState({
      [ev.target.name]: ev.target.value
    });
  };

  //axios post
  saveNote = ev => {
    ev.preventDefault();
    if (this.state.text === "" || this.state.content === "") {
      alert("Please fill in all of the required fields");
    } else {
      axios
        .post("http://localhost:9000/api/notes", {
          title: this.state.title,
          description: this.state.content
        })
        .then(this.updateNotes());
    }
  };

  //axios put
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
        .put(`http://localhost:9000/api/notes/${id}`, {
          title: this.state.title,
          description: this.state.content
        })
        .then(res => console.log(res))
        .then(this.updateNotes());
      alert("Note saved!");
    }
  };

  //axios delete
  deleteNote = (ev, id) => {
    ev.preventDefault();
    console.log(id);
    axios
      .delete(`http://localhost:9000/api/notes/${id}`)
      .then(this.updateNotes());
  };

  //checks if title or textBody contain the text in state.searchText
  search = ev => {
    ev.preventDefault();
    this.setState({
      notes: this.state.notes.filter(note => {
        return (
          note.title.indexOf(this.state.searchText) !== -1 ||
          note.textBody.indexOf(this.state.searchText) !== -1
        );
      })
    });
  };

  //reverses order of notes
  sort = () => {
    this.setState({
      notes: this.state.notes.reverse()
    });
  };

  login = ev => {
    ev.preventDefault();
    this.setState({
      loggedIn: true
    });
    this.renderScreen();
  };

  render() {
    return (
      <div className="App">
        <div className="container">
          <SideBar
            changeHandler={this.changeHandler}
            search={this.search}
            updateNotes={this.updateNotes}
          />

          {/* home page is a login screen */}

          <Route
            exact
            path="/notes"
            render={props => (
              <ViewNotes
                {...props}
                notes={this.state.notes}
                selectNote={this.selectNote}
                sort={this.sort}
              />
            )}
          />

          <Route
            exact
            path="/"
            render={props => <Login {...props} login={this.login} />}
          />
          {/* <Route
            exact
            path="/"
            render= {props => (
              <ViewNotes
                {...props}
                notes={this.state.notes}
                selectNote={this.selectNote}
                sort={this.sort}
              />
            )}
          /> */}

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

export default withRouter(App);
