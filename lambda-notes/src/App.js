import React, { Component } from "react";
import axios from "axios";
import { Route, Switch } from "react-router-dom";
import NotesList from "./Components/NotesList";
import NoteForm from "./Components/NoteForm";
import Sidebar from "./Components/Sidebar";
import NoteView from "./Components/NoteView";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: [],
      fnotes: []
    };
  }

  componentDidMount() {
    this.fetchNotes();
  }

  componentDidUpdate() {
    this.fetchNotes();
  }

  //Gets all notes from database
  fetchNotes = () => {
    axios
      .get("https://fe-notes.herokuapp.com/note/get/all")
      .then(res => this.setState({ notes: res.data }))
      .catch(err => console.log(err));
  };

  //Edits notes, takes an object as a parameter
  editNote = obj => {
    const index = this.state.notes.findIndex(note => note._id === obj.id);
    console.log(index);

    axios
      .put(`https://fe-notes.herokuapp.com/note/edit/${obj.id}`, obj)
      .then(res => {
        this.setState({ notes: this.state.notes.splice(index, 1, res.data) });
        console.log("edited", res);
      })
      .catch(err => console.dir(err));
  };

  //Deletes note by id
  deleteNote = id => {
    axios
      .delete(`https://fe-notes.herokuapp.com/note/delete/${id}`)
      .then(res => {
        console.log("deleted", res);
      })
      .catch(err => console.dir(err));
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
                  notes={
                    this.state.fnotes.length > 0
                      ? this.state.fnotes
                      : this.state.notes
                  }
                  editNote={this.editNote}
                  deleteNote={this.deleteNote}
                />
              )}
            />

            <Route
              exact
              path="/create"
              render={props => <NoteForm {...props} notes={this.state.notes} />}
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
                  deleteNote={this.deleteNote}
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