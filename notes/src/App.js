import React, { Component } from 'react';
import logo from './logo.svg';
import { Route, Link } from 'react-router-dom'
import SideBar from './components/Sidebar'
import NoteList from './components/NoteList'
import Notes from './notes'
import Note from './components/Note'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = Notes;
  }
  render() {
    console.log("state", this.state)
    return (
      <div className="wrapper">
        <Route path="/" component={SideBar} />
        <Route exact path="/" render={(props) => (<NoteList notes={this.state} />)} />
        <Route exact path="/notes/:id" render={(props) => (<Note note={this.state[props.match.params.id]} />)} />
      </div>
    );
  }
}

export default App;