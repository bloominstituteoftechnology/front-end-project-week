import React, { Component } from 'react'
import Navigation from './components/Navigation';
import CreateNote from './components/CreateNote';
import NoteCards from './components/NoteCards';

 class Main extends Component {

  render() {
    return (
      <div className="container">
        <Navigation />
        <NoteCards />
        <CreateNote />
      </div>
    )
  }
}

export default Main;