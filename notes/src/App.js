import React, { Component } from 'react';
import './App.css';
import NoteList from "./components/NoteList"
import Note from "./components/Note"
import CreateNote from "./components/CreateNote"
import DeleteNote from "./components/DeleteNote"
import NoteForm from "./components/NoteForm"
import { Route, Link } from "react-router-dom"

class App extends Component {
  render() {
    return (
      <div className="App">
      <h1 className="lambda-notes">Lambda Notes</h1>
    <Link to="/"><button className="aside-button">View Your Notes</button></Link>
    <Link to="/create"><button className="aside-button">+ Create Note</button></Link>
      <Route exact path ="/" component={NoteList} />
      <Route path ="/:id" component={Note} />
      <Route path="/edit/:id" component={NoteForm} />
      <Route path ="/create" component={CreateNote} />
      <Route path="/delete/:id" component={DeleteNote} />
      </div>
    );
  }
}

export default App;
