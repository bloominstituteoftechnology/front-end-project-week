import React, { Component } from 'react';
import { Route, NavLink } from "react-router-dom";
import axios from "axios";

import './App.css';

import Sidebar from "./components/Sidebar";
import NoteList from "./components/NoteList";
import NoteView from "./components/NoteView";
import EditForm from "./components/EditForm";
import NewNoteForm from "./components/NewNoteForm";
import Register from "./components/Register";
import Login from "./components/Login";

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: []
    }
  }

  componentDidMount() {
    axios
      .get("https://infinite-cliffs-77240.herokuapp.com/api/notes")
      // .get("http://localhost:9000/api/notes")
      .then(response => this.setState({ notes: response.data }))
      .catch(error => console.log(error));
  }

  finishEdit = (note, history) => {
    const id = note.id;
    axios
      .put(`https://infinite-cliffs-77240.herokuapp.com/api/notes/${id}`, note)
      // .put(`http://localhost:9000/api/notes/${id}`, note)
      .then(() => {
        history.push(`/note/${id}`);
        axios
          .get("https://infinite-cliffs-77240.herokuapp.com/api/notes")
          // .get("http://localhost:9000/api/notes")
          .then(response => this.setState({ notes: response.data }))
          .catch(error => console.log(error));
      })
      .catch(error => console.log(error));
  }

  finishAdd = (note, history) => {
    axios
      .post("https://infinite-cliffs-77240.herokuapp.com/api/notes", note)
      // .post("http://localhost:9000/api/notes", note)
      .then(response => {
        console.log("RESPONSE HERE:", response);
        history.push(`/note/${response.data}`);
        this.setState({
          notes: [
            ...this.state.notes,
            {
              ...note,
              id: response.data
            }
          ]
        });
      })
      .catch(error => console.log(error));
  }

  deleteNote = (id, history) => {
    axios
      .delete(`https://infinite-cliffs-77240.herokuapp.com/api/notes/${id}`)
      // .delete(`http://localhost:9000/api/notes/${id}`)
      .then(() => {
        history.push("/");
        axios
          .get("https://infinite-cliffs-77240.herokuapp.com/api/notes")
          // .get("http://localhost:9000/api/notes")
          .then(response => this.setState({ notes: response.data }))
          .catch(error => console.log(error));
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div className="App">
        <header>
          <NavLink to="/register">Register</NavLink>
          <NavLink to="/login">Login</NavLink>
        </header>
        <Sidebar />
        <Route exact path="/" render={props => <NoteList {...props} noteList={this.state.notes} />} />
        <Route path="/note/:id" render={props => <NoteView {...props} delNote={this.deleteNote} />} />
        <Route path="/edit/:id" render={props => <EditForm {...props} finishEdit={this.finishEdit} />} />
        <Route path="/add" render={props => <NewNoteForm {...props} finishAdd={this.finishAdd} />} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
      </div>
    );
  }
}

export default App;
