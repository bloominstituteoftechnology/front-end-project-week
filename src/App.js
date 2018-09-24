import React, { Component } from 'react'
import NotesBar from './components/NotesBar'
import NotesMain from './components/NotesMain'

class App extends Component {
  state = {
    notes: [
      {},
      {},
      {},
    ]
  }

  render() {
    return (
      <div className="App">
        <h1>Lambda Notes App</h1>
        <NotesBar />
        <NotesMain />
      </div>
    )
  }
}

export default App
