import React, {Component} from "react";
import {Route, Switch} from "react-router-dom";
import axios from "axios";
import "./App.css";

import Menu from "./components/Menu";
import ListView from "./components/ListView";
import NewNote from "./components/NewNote";
import NoteView from "./components/NoteView";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: []
    };
  }

  componentDidMount = () => {
    // console.log("CDM: Notes fetched", this.state.notes);
    // this.fetchNotes();
    axios
      .get("https://fe-notes.herokuapp.com/note/get/all")
      .then(response => {
        console.log(response.data);
        this.setState({notes: response.data});
      })
      .catch(err => console.log(err));
  };

  addNewNote = newNote => {
    axios
      .post("https://fe-notes.herokuapp.com/note/create", newNote)
      .then(res => {
        const newN = {
          tags: newNote.tags,
          _id: res.data.success,
          title: newNote.title,
          textBody: newNote.textBody
        };
        console.log(newN);
        this.setState({notes: this.state.notes.concat(newN)});
      });

    // this.setState({notes: [...this.state.notes, response.data]})
  };

  deleteNote = id => {
    axios
      .delete(`https://fe-notes.herokuapp.com/note/delete/${id}`)
      .then(response => {
        const filteredNotes = this.state.notes.filter(note => note._id !== id);
        this.setState({notes: filteredNotes});
      })
      .then(res => {
        axios.get("https://fe-notes.herokuapp.com/note/get/all");
      })
      .catch(err => console.log(err));
  };

  updateNote = (id, updated) => {
    axios
      .put(`https://fe-notes.herokuapp.com/note/edit/${id}`, updated)
      .then(res => {
        axios
          .get("https://fe-notes.herokuapp.com/note/get/all")
          .then(res => this.setState({notes: res.data}));
      });
  };

  render() {
    return (
      <div className="App">
        <Menu />

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
              path="/:id"
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

export default App;
