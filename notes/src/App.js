import React, { Component } from 'react';
import logo from './logo.svg';
import SideBar from './components/Sidebar'
import NoteList from './components/NoteList'
import Notes from './notes'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = Notes;
  }
  render() {
    console.log("state", this.state)
    return (
      <div className="wrapper">
        <SideBar />
        <NoteList notes={this.state} />
      </div>
    );
  }
}

export default App;
