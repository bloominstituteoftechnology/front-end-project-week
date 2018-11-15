import React, { Component } from 'react'
import Header from './components/Header';
import Navigation from './components/Navigation';
import NoteCards from './components/NoteCards';

 class Main extends Component {

  render() {
    return (
      <div className="wrapper">
        <NoteCards />
      </div>
    )
  }
}

export default Main;