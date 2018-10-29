import React, { Component } from 'react';
import './App.css';
import NoteList from "./components/NoteList"
import Note from "./components/Note"
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
      </div>
    );
  }
}

export default App;
