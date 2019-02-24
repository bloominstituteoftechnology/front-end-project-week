import React, { Component } from "react"
import { Route } from "react-router-dom"

import Navbar from "./components/Navbar"
import NotesList from "./containers/NotesList"

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Route path="/" component={NotesList} />
      </div>
    )
  }
}

export default App
