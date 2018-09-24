import React, { Component } from 'react'
import styled from 'styled-components'
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
      <Div1 className="App">
        <H1>Lambda Notes App</H1>
        <NotesBar />
        <NotesMain />
      </Div1>
    )
  }
}

const Div1 = styled.div`
`
const H1 = styled.h1`
`

export default App
