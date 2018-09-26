import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import styled, { createGlobalStyle } from 'styled-components'
import { withRouter } from 'react-router-dom'
import SideBar from './components/SideBar'
import NotesMain from './components/NotesMain'
import NoteForm from './components/NoteForm'
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
        id: 1537905924075,
        title: "Trailblaze through the wild",
        text: "Get out there and breathe in nature.",
        tags: ["backpacking", "nature", "outdoors"]
      },
      {
        id: 1537905911476,
        title: "Grab a buddy",
        text: "Find an outdoorsy friend that loves to rough it up.",
        tags: ["backpacking", "outsdoorsy", "friend"]
      },
      {
        id: 1537905943717,
        title: "Trailblaze through the wild",
        text: "Get out there and breathe in nature.",
        tags: ["backpacking", "nature", "outdoors"]
      },
      {
        id: 1537905962795,
        title: "Get a rucksack",
        text: "Find a nice rucksack that can hold all your backpacking gear.",
        tags: ["backpacking", "gear", "capacity"]
      }
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
    const notes = [...currentList, updatedNote]
    this.setState({ notes })
  }

  deleteNote = (noteId) => {
    this.props.history.push("/")
    this.setState({ notes: this.state.notes.filter(note => note.id !== noteId) })
  }

  render() {
    return (
      <Div1 className="App">
        <SideBar />
        
        <Route exact path="/" render={() => 
          <NotesMain
            notes={this.state.notes}
          />
        }/>
        <Route path="/new" render={() => 
          <NoteForm
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
          <NoteForm
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
  * {
    box-sizing: border-box;
  }
  html,
  body {
    margin: 0;
    padding: 0;
    font-size: 62.5%;
  }
  .App {
    width: 100%;
    max-width: 888px;
    margin: 0 auto;
    border: 1px solid #D6D5D6;
  }
  h1 {
    font-size: 3rem;
  }
  h2 {
    font-size: 2.3rem;
  }
  h3 {
    font-size: 2rem;
  }
  p {
    font-size: 1.6rem;
  }
  button {
    background-color: #24B8BD;
    color: white;
    font-size: 1.5rem;
    width: 190px;
    padding: 5%;
    margin-bottom: 8%;
    border-radius: 2px;
  }
`
const Div1 = styled.div`
  display: flex;
`

export default withRouter(App)
