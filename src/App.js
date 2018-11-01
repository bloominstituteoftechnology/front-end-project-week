import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import axios from 'axios'
import styled, { createGlobalStyle } from 'styled-components'
import { withRouter } from 'react-router-dom'
import SideBar from './components/SideBar'
import NotesMain from './components/NotesMain'
import NoteForm from './components/NoteForm'
import NoteSingle from './components/NoteSingle'

class App extends Component {
  state = {
    notes: [],
    filteredNotes: [],
    tags: ["all", "gear", "capacity", "nature", "outdoors", "outsdoorsy", "friend", "hiking groups", "store", "adventure"],
    noteUpdate: null
  }

  componentDidMount() {
    this.getNotesFromAPI()
  }

  // componentDidUpdate() {
  //   setTimeout(this.getNotesFromAPI, 5000)
  // }

  getNotesFromAPI = () => {
    axios.get('https://lsnotes-timh1203.herokuapp.com/notes')
      .then(resp => this.setState({ notes: resp.data }))
      .catch(err => console.log(err))
  }

  addNote = (newNote) => {
    let filteredTags = [...newNote.tags].filter(excluded => ![...this.state.tags].includes(excluded))
    this.setState({ notes: [...this.state.notes, newNote], tags: [...this.state.tags, ...filteredTags] })
  }

  editNote = (noteId) => {
    this.setState({ noteUpdate: this.state.notes.filter(note => note.id === noteId)[0] })
  }

  // updateNote = (targetNote) => {
  //   let currentList = this.state.notes.filter(note => note.id !== targetNote.id)
  //   let updatedNote = this.state.notes.filter(note => note.id === targetNote.id)[0]
  //   updatedNote.title = targetNote.title
  //   updatedNote.text = targetNote.text
  //   updatedNote.tags = targetNote.tags
  //   const notes = [...currentList, updatedNote]
  //   this.setState({ notes })
  // }

  deleteNote = (noteId) => {
    this.props.history.push("/")
    this.setState({ notes: this.state.notes.filter(note => note.id !== noteId) })
  }

  filterNotes = (e, tagName) => {
    e.preventDefault()

    if (tagName === "all") {
      const filteredNotes = [...this.state.notes]
      this.setState({ filteredNotes })
    } else {
      const filteredNotes = [...this.state.notes].filter(note => note.tags.includes(tagName))
      this.setState({ filteredNotes })
    }
  }

  render() {
    return (
      <Div className="App">
        <SideBar />

        <Route exact path="/" render={() =>
          <NotesMain
            notes={this.state.notes}
            filteredNotes={this.state.filteredNotes}
            tags={this.state.tags}
            filterNotes={this.filterNotes}
          />
        } />
        <Route path="/new" render={() =>
          <NoteForm
            addNote={this.addNote}
            noteUpdate={this.state.noteUpdate}
          />
        } />
        <Route exact path="/notes/:id" render={(props) =>
          <NoteSingle
            {...props}
            notes={this.state.notes}
            editNote={this.editNote}
            deleteNote={this.deleteNote}
          />
        } />
        <Route path="/notes/:id/edit" render={() =>
          <NoteForm
            noteUpdate={this.state.noteUpdate}
            updateNote={this.updateNote}
          />
        }
        />

        <GlobalStyle />
      </Div>
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
    font-family: 'Average Sans';
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
    font-size: 1.6rem;
    font-family: 'Average Sans';
    color: black;
    border: 1px solid lightgray;
    border-radius: 50px;
    &:hover {
      background: black;
      color: white;
      box-shadow: 0 0 20px lightgray;
      cursor: pointer;
    }
  }
`
const Div = styled.div``

export default withRouter(App)
