import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import styled, { createGlobalStyle } from 'styled-components'
import { withRouter } from 'react-router-dom'
import NotesBar from './components/NotesBar'
import NotesMain from './components/NotesMain'
import NoteNew from './components/NoteNew'
import NoteSingle from './components/NoteSingle'

class App extends Component {
  state = {
    notes: [
      {
        id: 1537805881051,
        title: "Get a rucksack",
        text: "Find a nice rucksack that can hold all your backpacking gear.",
        tags: ["backpacking", "gear", "capacity"]
      },
      {
        id: 1537805891197,
        title: "Grab a buddy",
        text: "Find an outdoorsy friend that loves to rough it up.",
        tags: ["backpacking", "outsdoorsy", "friend"]
      },
      {
        id: 1537805898669,
        title: "Trailblaze through the wild",
        text: "Get out there and breathe in nature.",
        tags: ["backpacking", "nature", "outdoors"]
      },
    ],
    noteUpdate: null
  }

  addNote = (newNote) => {
    this.setState({ notes: [ ...this.state.notes, newNote] })
  }

  editNote = (noteId) => {
    this.setState({ noteUpdate: this.state.notes.filter(note => note.id === noteId)[0] })
  }

  updateNote = (targetNote) => {
    let currentList = this.state.notes.filter(note => note.id !== targetNote.id)
    let updatedNote = this.state.notes.filter(note => note.id === targetNote.id)[0]
    updatedNote.title = targetNote.title
    updatedNote.text = targetNote.text
    updatedNote.tags = targetNote.tags
    const notes = [updatedNote, ...currentList]
    this.setState({ notes })
  }

  deleteNote = (noteId) => {
    this.props.history.push("/")
    this.setState({ notes: this.state.notes.filter(note => note.id !== noteId) })
  }

  render() {
    return (
      <Div1 className="App">
        <NotesBar />
        
        <Route exact path="/" render={() => 
          <NotesMain
            notes={this.state.notes}
            deleteNote={this.deleteNote}
          />
        }/>
        <Route path="/new" render={() => 
          <NoteNew
            addNote={this.addNote}
          />
        }/>
        <Route exact path="/notes/:id" render={(props) => 
          <NoteSingle
            {...props}
            notes={this.state.notes}
            editNote={this.editNote}
            deleteNote={this.deleteNote}
          />
        }/>
        <Route path="/notes/:id/edit" render={() => 
          <NoteNew
            noteUpdate={this.state.noteUpdate}
            updateNote={this.updateNote}
          />
        }
        />

        <GlobalStyle />
      </Div1>
    )
  }
}

const GlobalStyle = createGlobalStyle`
  html,
  body {
    margin: 0;
    padding: 0;
  }
  .App {
    width: 100%;
    max-width: 888px;
    margin: 0 auto;
    border: 1px solid black;
  }
`
const Div1 = styled.div`
  display: flex;
`
const H1 = styled.h1``

export default withRouter(App)
