import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import styled from 'styled-components'
import NotesBar from './components/NotesBar'
import NotesMain from './components/NotesMain'
import NoteNew from './components/NoteNew'

class App extends Component {
  state = {
    notes: [
      {
        id: 1537805881051,
        title: "Get a rucksack",
        text: "Find a nice rucksack that can hold all your backpacking gear."
      },
      {
        id: 1537805891197,
        title: "Grab a buddy",
        text: "Find an outdoorsy friend that loves to rough it up."
      },
      {
        id: 1537805898669,
        title: "Trailblaze through the wild",
        text: "Get out there and breathe in nature."
      },
    ]
  }

  addNote = (newNote) => {
    this.setState({ notes: [ ...this.state.notes, newNote] })
  }

  render() {
    return (
      <Div1 className="App">
        <H1>Lambda Notes App</H1>
        <NotesBar />
        
        <Route exact path="/" render={() => 
          <NotesMain
            notes={this.state.notes}
          />
        }/>
        <Route path="/new" render={() => 
          <NoteNew
            addNote={this.addNote}
          />
        }
        />
      </Div1>
    )
  }
}

const Div1 = styled.div``
const H1 = styled.h1``

export default App
