import React, { Component } from "react";
import "./App.css";
import { Route } from "react-router-dom";
import NoteList from "./components/NoteList/notelist";
import NewNoteForm from "./components/NewNote/newnoteform";
import NoteCard from "./components/EditNote/notecard";
import EditNoteForm from "./components/EditNote/editnoteform";
import Authenticate from "./components/Authentication/Authenticate";
import Register from "./components/Register";

class App extends Component {
  componentDidMount() {}
  render() {
    return (
      <div className="App-container">
        <Route exact path="/" component={NoteList} />
        <Route path="/create" component={NewNoteForm} />
        <Route path="/note/:id" component={NoteCard} />
        <Route path="/edit/:id" component={EditNoteForm} />
        <Route path="/register" component={Register} />>
      </div>
    );
  }
}

export default Authenticate(App);
