import React, {Component} from "react";
import {Route, Switch} from "react-router-dom";
import axios from "axios";
import "./App.css";

import Login from "./components/Login/Login";
import authenticate from "./components/Login/authenticate";
import Menu from "./components/Menu";
import ListView from "./components/ListView";
import NewNote from "./components/Notes/NewNote";
import NoteView from "./components/Notes/NoteView";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      tags: []
    };
  }

  componentDidMount = () => {
    axios
      .get("https://heronotes-gabe.herokuapp.com/notes")
      .then(response => {
        console.log(response.data);
        this.setState({notes: response.data});
      })
      .catch(err => console.log(err));
  };

  addNewNote = newNote => {
    console.log("newNote", newNote);

    axios
      // .post("https://fe-notes.herokuapp.com/note/create", newNote)
      .post("https://heronotes-gabe.herokuapp.com/notes", newNote)
      .then(res => {
        console.log("newNote:", res.data);

        const newN = {
          title: newNote.title,
          textBody: newNote.textBody
        };
        console.log(newN);
        this.setState({notes: this.state.notes.concat(newN)});
      })
      .catch(err => console.log("addNewNote catch", err));
  };

  deleteNote = id => {
    axios
      .delete(`https://heronotes-gabe.herokuapp.com/notes/${id}`)
      .then(response => {
        const filteredNotes = this.state.notes.filter(note => note.id !== id);
        this.setState({notes: filteredNotes});
      })
      .then(res => {
        axios.get("https://heronotes-gabe.herokuapp.com/notes");
      })
      .catch(err => console.log(err));
  };

  updateNote = (id, updated) => {
    console.log("id:", id);
    console.log("updated:", updated);

    axios
      .put(`https://heronotes-gabe.herokuapp.com/notes/${id}`, updated)
      .then(res => {
        const updatedNotes = this.state.notes.map(note => {
          console.log("note.id:", note.id);
          console.log("res.data:", res.data);
          console.log(Number(note.id) === Number(res.data.id));

          if (Number(note.id) === Number(res.data.id)) {
            return res.data;
          } else {
            return note;
          }
        });
        console.log("updatedNotes:", updatedNotes);
        console.log("this.state.notes:", this.state.notes);

        this.setState({notes: updatedNotes});
      });
  };

  render() {
    return (
      <div className="App">
        <Menu />
        <div className="logout">
          <h3>Welcome {this.props.user ? this.props.user : "user"}</h3>
          <button onClick={this.props.logout}>Logout</button>
        </div>

        <div className="display">
          <Switch>
            <Route
              path="/new"
              render={props => (
                <NewNote {...props} addNewNote={this.addNewNote} />
              )}
            />

            <Route
              exact
              path="/notes"
              render={props => (
                <ListView notes={this.state.notes} viewNote={this.viewNote} />
              )}
            />

            <Route
              path="/notes/:id"
              render={props => (
                <NoteView
                  {...props}
                  notes={this.state.notes}
                  delete={this.deleteNote}
                  update={this.updateNote}
                />
              )}
            />
          </Switch>
        </div>
      </div>
    );
  }
}

const enhancedApp = authenticate(App);
export default enhancedApp;
