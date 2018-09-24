import React, { Component } from 'react'
import styled from 'styled-components'
import NotesBar from './components/NotesBar'
import NotesMain from './components/NotesMain'

class App extends Component {
  state = {
    notes: [
      {
        id: 0,
        title: "Get a rucksack",
        text: "Find a nice rucksack that can hold all your backpacking gear."
      },
      {
        id: 1,
        title: "Grab a buddy",
        text: "Find an outdoorsy friend that loves to rough it up."
      },
      {
        id: 2,
        title: "Trailblaze through the wild",
        text: "Get out there and breathe in nature."
      },
    ]
  }

  render() {
    return (
      <Div1 className="App">
        <H1>Lambda Notes App</H1>
        <NotesBar />
        <NotesMain
          notes={this.state.notes}
        />
      </Div1>
    )
  }
}

const Div1 = styled.div``
const H1 = styled.h1``

export default App
